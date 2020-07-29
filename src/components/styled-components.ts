import styled from 'styled-components'

export const JobNotFoundImage = styled.div<{ small?: boolean }>`
  --width: ${(props) => (props.small ? '42px' : '90px')};
  width: var(--width);
  min-width: var(--width);
  height: var(--width);
  min-height: var(--width);
  background: #f2f2f2;
  border-radius: 4px;
`

export const JobImage = styled.div<{ url: string; small?: boolean }>`
  --width: ${(props) => (props.small ? '42px' : '90px')};
  width: var(--width);
  min-width: var(--width);
  height: var(--width);
  min-height: var(--width);
  background: rgba(0, 0, 0, 0) url(${(props) => props.url}) no-repeat scroll center center / contain;
  border-radius: 4px;
`
