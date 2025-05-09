import React from 'react';

// @ts-ignore
import shortcut from './utils/shortcut';
interface RectProps {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
}
type StartPointProps = {
  left: number;
  top: number;
  clientX: number;
  clientY: number;
} | null;
interface ChooserProps {
  children: React.ReactElement<{
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseMove?: () => void;
  }>;
  observeProp: string;
  observeHandle: (arr: string[], mode?: string) => void;
  border?: string;
  borderBg?: string;
}

// 相对于 wrap 的矩形
class Rect {
  left: number;
  width: number;
  top: number;
  height: number;

  constructor(props: RectProps) {
    this.left = props.left ?? 0;
    this.top = props.top ?? 0;
    this.width = props.width ?? 0;
    this.height = props.height ?? 0;
  }

  get right() {
    return this.left + this.width;
  }
  get bottom() {
    return this.top + this.height;
  }
}

class Chooser extends React.Component<ChooserProps> {
  childrenRef: React.RefObject<HTMLDivElement>;
  rectRef: React.RefObject<HTMLDivElement>;

  onSelectStart: (e: Event) => void;
  startPoint: StartPointProps;
  initValue: string[];
  prevValue: string[];
  mode: string;

  constructor(props: ChooserProps) {
    super(props);
    this.childrenRef = React.createRef() as React.RefObject<HTMLDivElement>;
    this.rectRef = React.createRef() as React.RefObject<HTMLDivElement>;
    this.onSelectStart = (e) => e.preventDefault();
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.getOffset = this.getOffset.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.cancel = this.cancel.bind(this);
    this.startPoint = null;
    this.initValue = [];
    this.prevValue = this.initValue;
    /** @type {('append'|'subtract'|'')} */
    this.mode = '';
  }
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
    if (this.childrenRef && this.childrenRef.current) {
      this.childrenRef.current.onselectstart = this.onSelectStart;
    }
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }
  onMouseDown(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { target, clientX, clientY, shiftKey, altKey, button } = event;
    const { onMouseDown } = this.props.children.props;
    if (onMouseDown) {
      onMouseDown();
    }
    if (button) return; // 0 表示左键
    if ((target as Element).tagName === 'INPUT') return;

    const { left, top } = this.childrenRef.current.getBoundingClientRect();
    if (shiftKey && !altKey) this.mode = 'append';
    if (!shiftKey && altKey) this.mode = 'subtract';
    this.startPoint = {
      clientX,
      clientY,
      left: clientX - left,
      top: clientY - top,
    };
  }
  onMouseMove({ clientX, clientY }: { clientX: number; clientY: number }) {
    const { onMouseMove } = this.props.children.props;
    const { observeProp, observeHandle } = this.props || {};

    const rectEle = this.rectRef.current;
    const childrenRef = this.childrenRef.current;
    if (onMouseMove) {
      onMouseMove();
    }
    if (!this.startPoint) return (this.prevValue = this.initValue);
    if (
      Math.sqrt(
        Math.pow(this.startPoint.clientX - clientX, 2) +
          Math.pow(this.startPoint.clientY - clientY, 2),
      ) < 10
    )
      return;
    const { left, top } = childrenRef.getBoundingClientRect();
    const endLeft = clientX - left;
    const endTop = clientY - top;
    const rect = new Rect({
      left: Math.min(this.startPoint.left, endLeft),
      top: Math.min(this.startPoint.top, endTop),
      width: Math.abs(this.startPoint.left - endLeft),
      height: Math.abs(this.startPoint.top - endTop),
    });
    rectEle.style.left = `${rect.left - 10}px`;
    rectEle.style.top = `${rect.top - 10}px`;
    rectEle.style.width = `${rect.width + 20}px`;
    rectEle.style.height = `${rect.height + 20}px`;
    rectEle.style.display = 'block';
    if (observeHandle) {
      const items: HTMLElement[] = Array.from(childrenRef.querySelectorAll(`[${observeProp}]`));

      const contain: string[] = [];
      items.forEach((ele) => {
        const rect1 = new Rect({
          left: this.getOffset(ele, 'offsetLeft'),
          top: this.getOffset(ele, 'offsetTop'),
          width: ele.offsetWidth,
          height: ele.offsetHeight,
        });
        if (
          !(
            rect1.left > rect.right ||
            rect1.top > rect.bottom ||
            rect1.right < rect.left ||
            rect1.bottom < rect.top
          )
        ) {
          contain.push(ele.getAttribute(observeProp)!);
        }
      });

      if (
        this.prevValue.length !== contain.length ||
        this.prevValue.join(',') !== contain.join(',')
      ) {
        this.prevValue = contain;
        observeHandle(contain, this.mode);
      }
    }
  }
  onMouseUp() {
    const { onMouseUp } = this.props.children.props;
    if (onMouseUp) {
      onMouseUp();
    }
    this.cancel();
  }
  onKeyDown(e: KeyboardEvent) {
    const { observeHandle } = this.props;
    if (shortcut(e, 'esc')) {
      this.cancel();
      if (observeHandle) {
        observeHandle([]);
      }
    }
  }
  getOffset(element: HTMLElement | null, prop: 'offsetTop' | 'offsetLeft'): number {
    // 检查 element 是否存在以及 offsetParent 是否存在
    if (!element || !element.offsetParent) {
      return 0; // 如果 element 或 offsetParent 为 null，返回 0
    }

    // 确保 this.childrenRef.current 存在
    const childrenRefCurrent = this.childrenRef?.current;
    const parentOffset =
      element.offsetParent === childrenRefCurrent
        ? 0
        : this.getOffset(element.offsetParent as HTMLElement, prop);

    // 确保 prop 是有效的属性
    return (element[prop] || 0) + parentOffset;
  }

  render() {
    const { children, border, borderBg } = this.props;

    if (!children || !React.isValidElement(children)) {
      console.error('children is not valid Element');
      return null;
    }

    return (
      <div
        style={{ position: 'relative', userSelect: 'none' }}
        ref={this.childrenRef}
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
      >
        {children}
        <div
          className="rect"
          ref={this.rectRef}
          style={{
            cursor: 'default',
            position: 'absolute',
            zIndex: 999,
            display: 'none',
            padding: '10px',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              border: border ?? '1px dashed #000',
              backgroundColor: borderBg ?? 'rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
      </div>
    );
  }
  cancel() {
    this.prevValue = this.initValue;
    this.mode = '';
    this.startPoint = null;
    this.rectRef.current.style.display = 'none';
  }
}

export default React.forwardRef((props: ChooserProps, ref) => (
  <Chooser {...props} ref={ref as React.Ref<Chooser>} />
));
