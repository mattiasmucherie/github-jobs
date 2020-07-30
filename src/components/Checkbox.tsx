import React from 'react'
import styled from 'styled-components'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? '#1E86FF' : 'inherit')};
  border: 1px solid ${(props) => (props.checked ? '#1E86FF' : '#B9BDCF')};
  border-radius: 2px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
`

interface CheckboxProps {
  checked: boolean
  onChange: any
}
const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { checked } = props
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

export default Checkbox
