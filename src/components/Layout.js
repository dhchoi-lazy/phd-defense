import Grid from "@mui/material/Grid";

export function GridNormal({ children }) {
  return (
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={6}>
        {children}
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
}

export function GridHighlight({ children }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  );
}

export function GridContainer({ children }) {
  return <Grid container>{children}</Grid>;
}

export default function Layout({ children }) {
  return (
    <GridContainer className="layout">
      <Grid item xs={12}>
        {children}
      </Grid>
    </GridContainer>
  );
}
