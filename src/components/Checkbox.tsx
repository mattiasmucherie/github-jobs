import React, { ChangeEvent } from 'react'
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
    box-shadow: 0 0 0 3px #1e86ff;
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
const CheckboxLabelText = styled.span`
  color: #334680;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-weight: 500;
`
const Container = styled.div`
  margin: 8px 0;
`

interface CheckboxProps {
  setFunction: (checked: boolean, labelText?: string) => void
  labelText: string
  checkedProps?: boolean
  currentCity?: string
}
const Checkbox = (props: CheckboxProps): JSX.Element => {
  const { checkedProps, setFunction, labelText, currentCity } = props
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.checked, labelText)
  }
  const checked = checkedProps || (currentCity ? currentCity === labelText : false)
  return (
    <Container>
      <label>
        <CheckboxContainer>
          <HiddenCheckbox checked={checked} onChange={handleOnChange} />
          <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon>
          </StyledCheckbox>
        </CheckboxContainer>
        <CheckboxLabelText>{labelText}</CheckboxLabelText>
      </label>
    </Container>
  )
}

export default Checkbox
