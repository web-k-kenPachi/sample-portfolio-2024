import './index.scss';

import TransitionLink from '@/components/common/TransitionLink';

const LargeEllipseButton = ({ children, className = '', href }) => {
  return (
    <TransitionLink href={href} className={`large-ellipse-button ${className}`}>
      <span>{children}</span>
    </TransitionLink>
  );
};

export default LargeEllipseButton;
