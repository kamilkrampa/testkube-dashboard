import {Space} from 'antd';

import styled from 'styled-components';

import {Button, Text, Title} from '@custom-antd';

import {ReactComponent as EmptySearch} from '@assets/empty-search.svg';

import Colors from '@styles/Colors';

import {StyledButtonContainer} from './EntityListContent.styled';

export const StyledEmptyTestsDataContainer = styled(Space)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyDataWithFilters: React.FC<any> = props => {
  const {resetFilters} = props;

  return (
    <StyledEmptyTestsDataContainer size={30} direction="vertical">
      <EmptySearch />
      <Title className="text-center">No results found</Title>
      <Text className="regular middle text-center" color={Colors.slate400}>
        We couldn’t find any results for your filters.
      </Text>
      <StyledButtonContainer>
        <Button type="primary" onClick={() => resetFilters()}>
          Reset all filters
        </Button>
      </StyledButtonContainer>
    </StyledEmptyTestsDataContainer>
  );
};

export default EmptyDataWithFilters;
