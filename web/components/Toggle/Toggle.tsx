import classNames from 'classnames';
import {
  FocusEvent,
  MouseEvent,
  ReactNode,
  TouchEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { CheckIcon } from './CheckIcon';
import { XIcon } from './XIcon';
import { pointerCoord } from './util';

import styles from './toggleStyle.module.scss';

type ToggleProps = {
  // checked?: boolean;
  disabled?: boolean;
  defaultChecked: boolean;
  onFocus?: (event: FocusEvent) => void; // TODO: type this
  onBlur?: (event: FocusEvent) => void; // TODO: type this
  componentClassName?: string;
  'aria-labelledby'?: string;
  'aria-label': string;
  icons?: { checked: ReactNode; unchecked: ReactNode };
  inputProps?: Record<string, unknown>;
};

export const Toggle = ({
  // checked,
  defaultChecked,
  disabled,
  onFocus,
  onBlur,
  icons = {
    checked: <CheckIcon />,
    unchecked: <XIcon />,
  },
  componentClassName,
  ...inputProps
}: ToggleProps): JSX.Element => {
  const [moved, setMoved] = useState(false);
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [hasFocus, setHasFocus] = useState(false);
  const [previouslyChecked, setPreviouslyChecked] = useState(!defaultChecked);
  const [startX, setStartX] = useState(0); // figure out how to start as type null but then accept a number arg later
  const [activated, setActivated] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (disabled) return;

    const checkbox = inputRef.current;

    if (event.target !== checkbox && !moved) {
      setPreviouslyChecked(checkbox?.checked || false);
      // event.preventDefault();
      checkbox?.focus();
      checkbox?.click();
      return;
    }

    const checkedStatus = isChecked || checkbox?.checked;

    setIsChecked(!checkedStatus);
  };

  const handleTouchStart = (event: TouchEvent) => {
    if (disabled) return;

    setStartX(pointerCoord(event).x);
    setActivated(true);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (!activated) return;

    setMoved(true);

    if (startX) {
      const currentX = pointerCoord(event).x;

      if (isChecked && currentX + 15 < startX) {
        setIsChecked(false);
        setStartX(currentX);
        setActivated(true);
      } else if (currentX - 15 > startX) {
        setIsChecked(true);
        setStartX(currentX);
        setActivated(currentX < startX + 5);
      }
    }
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (!moved) return;

    const checkbox = inputRef.current;
    event.preventDefault();

    if (startX) {
      const endX = pointerCoord(event).x;

      if (previouslyChecked === true && startX + 4 > endX) {
        if (previouslyChecked !== isChecked) {
          setIsChecked(false);
          setPreviouslyChecked(isChecked); // TODO: make sure it is not accidentally grabbing the wrong checked value pre/post update
          checkbox?.click();
        }
      } else if (startX - 4 < endX) {
        if (previouslyChecked !== isChecked) {
          setIsChecked(true);
          setPreviouslyChecked(isChecked); // TODO: make sure it is not accidentally grabbing the wrong checked value pre/post update
          checkbox?.click();
        }
      }

      setActivated(false);
      setStartX(0);
      setMoved(false);
    }
  };

  const handleFocus = useCallback(
    (event: FocusEvent) => {
      if (onFocus) onFocus(event);
      setHasFocus(true);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (event: FocusEvent) => {
      if (onBlur) onBlur(event);
      setHasFocus(false);
    },
    [onBlur]
  );

  const classes = classNames(
    styles['react-toggle'],
    {
      [styles['react-toggle--checked']]: isChecked,
      [styles['react-toggle--focus']]: hasFocus,
      [styles['react-toggle--disabled']]: disabled,
    },
    componentClassName
  );

  return (
    // the <div> doesnt need focus since keyboard users will be able to reach the input element
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events
    <div
      className={classes}
      onClick={handleClick}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      role="button"
    >
      <div className={styles['react-toggle-track']}>
        <div className={styles['react-toggle-track-check']}>{icons.checked}</div>
        <div className={styles['react-toggle-track-x']}>{icons.unchecked}</div>
      </div>
      <div className={styles['react-toggle-thumb']} />

      <input
        {...inputProps}
        ref={inputRef}
        className={styles['react-toggle-screenreader-only']}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onBlur={handleBlur}
        onFocus={handleFocus}
        role="switch"
        type="checkbox"
      />
    </div>
  );
};
