import * as React from "react";
import { ReactElement } from "react";
import { styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const StyledAppBar = styled(AppBar)`
  background-color: rgba(0, 255, 0, 1);
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold;
  color: black;
  flex-grow: 1;
  text-align: left;
`;

function HideOnScroll({ children }: { children: ReactElement }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <StyledAppBar>
          <StyledToolbar>
            <StyledTypography variant="h1" as="div">
              Mykhailo Hrynkevych
            </StyledTypography>
          </StyledToolbar>
        </StyledAppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
