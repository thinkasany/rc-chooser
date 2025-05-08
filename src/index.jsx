import React, { useState, useRef, useEffect, useCallback } from 'react';

import shortcut from './utils/shortcut';
const KEYDOWN_TASK_POOL = new Set();
const styles = {
  warp: {
    position: 'relative',
  },
  rect: {
    cursor: 'default',
    position: 'absolute',
    zIndex: 999,
    display: 'none',
    padding: '10px',
    div: {
      width: '100%',
      height: '100%',
      border: `1px solid var(--enlivenTextColor)`, // 假设 $enlivenTextColor 是一个 CSS 变量
      background: 'rgba(var(--enlivenTextColor), 0.5)', // 假设 $enlivenTextColor 是一个 CSS 变量
    },
  },
};
class Rect {
  constructor(props) {
    Object.assign(this, props);
  }
  get right() {
    return this.left + this.width;
  }
  get bottom() {
    return this.top + this.height;
  }
}

const Chooser = ({ children, observeProp, observeHandle }) => {
  const [startPoint, setStartPoint] = useState(null);
  const [mode, setMode] = useState('');
  const [prevValue, setPrevValue] = useState([]);
  const initValue = [];
  const childrenRef = useRef(null);
  const rectRef = useRef(null);

  const onSelectStart = useCallback((e) => e.preventDefault(), []);

  const getOffset = useCallback((element, prop) => {
    const parent =
      element.offsetParent === childrenRef.current ? 0 : getOffset(element.offsetParent, prop);
    return element[prop] + parent;
  }, []);

  const cancel = useCallback(() => {
    if (rectRef.current) {
      rectRef.current.style.display = 'none';
    }
    setPrevValue(initValue);
    setMode('');
    setStartPoint(null);
  }, [initValue]);

  const onMouseDown = useCallback(({ target, clientX, clientY, shiftKey, altKey, button }) => {
    if (button) return; // 0 表示左键
    if (target.tagName === 'INPUT') return;

    const children = childrenRef.current;
    const { left, top } = children.getBoundingClientRect();

    if (shiftKey && !altKey) setMode('append');
    if (!shiftKey && altKey) setMode('subtract');

    setStartPoint({
      clientX,
      clientY,
      left: clientX - left,
      top: clientY - top,
    });
  }, []);

  const onMouseMove = useCallback(
    ({ clientX, clientY }) => {
      if (!startPoint) {
        setPrevValue(initValue);
        return;
      }

      if (
        Math.sqrt(
          Math.pow(startPoint.clientX - clientX, 2) + Math.pow(startPoint.clientY - clientY, 2),
        ) < 10
      )
        return;

      const children = childrenRef.current;
      const rectEle = rectRef.current;
      const { left, top } = children.getBoundingClientRect();
      const endLeft = clientX - left;
      const endTop = clientY - top;

      const rect = new Rect({
        left: Math.min(startPoint.left, endLeft),
        top: Math.min(startPoint.top, endTop),
        width: Math.abs(startPoint.left - endLeft),
        height: Math.abs(startPoint.top - endTop),
      });

      rectEle.style.left = `${rect.left - 10}px`;
      rectEle.style.top = `${rect.top - 10}px`;
      rectEle.style.width = `${rect.width + 20}px`;
      rectEle.style.height = `${rect.height + 20}px`;
      rectEle.style.display = 'block';

      if (observeHandle) {
        const items = Array.from(children.querySelectorAll(`[${observeProp}]`));
        const contain = [];
        items.forEach((ele) => {
          const rect1 = new Rect({
            left: getOffset(ele, 'offsetLeft'),
            top: getOffset(ele, 'offsetTop'),
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
            contain.push(ele.getAttribute(observeProp));
          }
        });

        if (prevValue.length !== contain.length || prevValue.join(',') !== contain.join(',')) {
          setPrevValue(contain);
          observeHandle(contain, mode);
        }
      }
    },
    [startPoint, initValue, observeHandle, observeProp, prevValue, mode, getOffset],
  );

  const onMouseUp = useCallback(() => {
    cancel();
  }, [cancel]);

  const onKeyDown = useCallback(
    (e) => {
      if (shortcut(e, 'esc')) {
        cancel();
        observeHandle && observeHandle([]);
      }
    },
    [cancel, observeHandle],
  );

  useEffect(() => {
    KEYDOWN_TASK_POOL.add(onKeyDown);
    const children = childrenRef.current;
    if (children) {
      children.onselectstart = onSelectStart;
    }

    return () => {
      KEYDOWN_TASK_POOL.delete(onKeyDown);
    };
  }, [onKeyDown, onSelectStart]);


  return React.cloneElement(children, {
    ref: childrenRef,
    className: `none_select ${styles.warp} ${children.props.className}`,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    children: (
      <>
        {children.props.children}
        <div ref={rectRef} className={styles.rect}>
          <div />
        </div>
      </>
    ),
  });
};

export default Chooser;
