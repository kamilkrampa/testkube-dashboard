import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {useQuery} from 'react-query';

import {TestsContext} from '@context/testsContext';
import {timeStampToDate, getDuration} from '@utils/formatDate';
import {RenderTestStatusSvgIcon, Typography} from '@atoms';

const StyledTestDescriptionIcon = styled.div`
  position: relative;
`;

const StyledTestDescription = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: var(--space-md);
`;

const TestDescription = () => {
  const [api, setApi] = useState<string>(localStorage.getItem('apiEndpoint') || '');
  const tests: any = useContext(TestsContext);

  const {data, error} = useQuery(['test', tests.selectedTest], () => {
    if (api) {
      return fetch(`${api}/${tests.selectedTest}`).then(res => res.json());
    }
  });

  React.useEffect(() => {
    const apiFromUser = localStorage.getItem('apiEndpoint');
    if (apiFromUser) {
      setApi(apiFromUser);
    }
  }, []);

  const renderTestStatus = (testStatus: string) => {
    return testStatus === 'pending'
      ? 'PENDING'
      : testStatus === 'error'
      ? 'ERROR'
      : testStatus === 'success'
      ? 'SUCCESS'
      : testStatus === 'queued'
      ? 'QUEUED'
      : '';
  };

  return (
    <>
      {error && <Typography variant="secondary">Something went wrong...</Typography>}
      {tests.selectedTest && data && (
        <>
          <StyledTestDescriptionIcon>
            <RenderTestStatusSvgIcon testStatus={data.result.status} width={50} height={50} />
          </StyledTestDescriptionIcon>
          <StyledTestDescription>
            <Typography variant="secondary"> TEST {renderTestStatus(data.result.status)}</Typography>
            <div>
              <Typography variant="secondary" font="bold">
                Name
              </Typography>
              <Typography variant="secondary" style={{marginTop: '-15px'}}>
                {data.scriptName}
              </Typography>
            </div>
            <div>
              <Typography variant="secondary" font="bold">
                Ended At
              </Typography>
              <Typography variant="secondary" style={{marginTop: '-15px'}}>
                {data.result.endTime ? timeStampToDate(data.result.endTime) : '-'}
              </Typography>
            </div>
            <div>
              <Typography variant="secondary" font="bold">
                Duration
              </Typography>
              <Typography variant="secondary" style={{marginTop: '-15px'}}>
                {data.result.endTime ? getDuration(data.result.startTime, data.result.endTime) : '-'}
              </Typography>
            </div>
            <div>
              <Typography variant="secondary" font="bold">
                Type
              </Typography>
              <Typography variant="secondary" style={{marginTop: '-15px'}}>
                {data.scriptType}
              </Typography>
            </div>
          </StyledTestDescription>
        </>
      )}
    </>
  );
};

export default TestDescription;
