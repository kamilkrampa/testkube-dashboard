import {SkeletonProps as AntdSkeletonProps} from 'antd';

import {StyledSkeleton} from './Skeleton.styled';

type AdditionalSkeletonStyles = {
  lineHeight?: number;
  container?: {
    paddingTop?: number;
  };
};

type CustomAntdSkeletonProps = {
  additionalStyles?: AdditionalSkeletonStyles;
};

const Skeleton: React.FC<AntdSkeletonProps & CustomAntdSkeletonProps> = props => {
  const {children, active = false, title = false, paragraph = {rows: 1, width: '100%'}} = props;

  if (children) {
    return (
      <StyledSkeleton className="testkube-skeleton" active={active} title={title} paragraph={paragraph} {...props}>
        {children}
      </StyledSkeleton>
    );
  }

  return (
    <StyledSkeleton className="testkube-skeleton" active={active} title={title} paragraph={paragraph} {...props} />
  );
};

export default Skeleton;
