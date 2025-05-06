import { Button } from "../Button/Button";
import { CatImage } from "../CatImage/CatImage";

import { Container, Wrapper, Input, InputsContainer, InputWrapper } from "./SettingPanel.styles";

type SettingPanelProps = {
  enabled: boolean;
  catUrl: string;
  toggleClickEnabled: () => void;
  handleClick: () => void;
  toggleClickAuto: () => void;
};

export const SettingPanel = ({
  enabled,
  catUrl,
  handleClick,
  toggleClickAuto,
  toggleClickEnabled,
}: SettingPanelProps) => {
  return (
    <Container>
      <Wrapper>
        <InputsContainer>
          <InputWrapper>
            <Input type="checkbox" id="enabled" name="enabled" onClick={toggleClickEnabled} />
            <label htmlFor="enabled">Enabled</label>
          </InputWrapper>
          <InputWrapper>
            <Input type="checkbox" id="refresh" name="refresh" onClick={toggleClickAuto} />
            <label htmlFor="refresh">Auto-refresh every 5 second</label>
          </InputWrapper>
          <Button disabled={!enabled} handleClick={handleClick}>
            Get cat
          </Button>
          <CatImage catUrl={catUrl} />
        </InputsContainer>
      </Wrapper>
    </Container>
  );
};
