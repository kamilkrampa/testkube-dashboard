import {TextProps as AntdTextProps} from 'antd/lib/typography/Text';
import {TypographyProps as AntTypographyProps} from 'antd/lib/typography/Typography';

import {StyledText} from './Text.styled';

type TextProps = {
  color?: string;
};

const Text: React.FC<AntTypographyProps<any> & AntdTextProps & TextProps> = props => {
  const {children, color, className, ...rest} = props;

  const classNames = `testkube-text ${className}`;

  return (
    <StyledText $color={color} className={classNames} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
