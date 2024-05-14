import { LinkText } from '@/components/common/LinkText';

const BlockSectionBottomLink = ({
  className,
  href,
  children,
  transitionLink,
}) => {
  return (
    <section className={`mb-4xl ${className}`}>
      <LinkText
        href={href}
        className='justify-center'
        transitionLink={transitionLink}
      >
        {children}
      </LinkText>
    </section>
  );
};

export default BlockSectionBottomLink;
