import { useIntl } from '@kne/react-intl';
import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import withLocale from './withLocale';
import style from './style.module.scss';

const FloatingDock = withLocale(({ items, size = 18, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} size={size} className={desktopClassName} />
      <FloatingDockMobile items={items} size={size} className={mobileClassName} />
    </>
  );
});

const FloatingDockMobile = ({ items, size, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${style.dockMobile} ${className || ''}`}>
      <AnimatePresence>
        {open && (
          <motion.div layoutId="nav" className={style.dockMobileItems}>
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { delay: idx * 0.05 }
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a href={item.href} onClick={item.onClick} className={style.dockMobileItem}>
                  <div className={style.dockMobileItemIcon} style={{ height: size, width: size }}>
                    {item.icon}
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setOpen(!open)} className={style.dockMobileTrigger}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, size, className }) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div onMouseMove={e => mouseX.set(e.pageX)} onMouseLeave={() => mouseX.set(Infinity)} className={`${style.dockDesktop} ${className || ''}`}>
      {items.map(item => (
        <IconContainer key={item.title} mouseX={mouseX} size={size} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href, onClick, size = 18 }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, val => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const baseIconSize = size;
  const padding = 10;
  const containerSize = baseIconSize + padding * 2;
  const containerSizeHover = containerSize + 40;

  const widthTransform = useTransform(distance, [-150, 0, 150], [containerSize, containerSizeHover, containerSize]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [containerSize, containerSizeHover, containerSize]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [baseIconSize, baseIconSize + 20, baseIconSize]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [baseIconSize, baseIconSize + 20, baseIconSize]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} onClick={onClick} className={style.iconContainer} ref={ref} style={{ width, height }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0, y: 10, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: 2, x: '-50%' }} className={style.tooltip}>
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div style={{ width: widthIcon, height: heightIcon }} className={style.iconInner}>
        {icon}
      </motion.div>
    </a>
  );
}

export { FloatingDockDesktop, FloatingDockMobile };

export default FloatingDock;
