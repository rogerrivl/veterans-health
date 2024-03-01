import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Grid } from "@mui/material";
import VetImage from "../assets/MentalHealth/veteransTalking.jpg";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function MentalHealth() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box>
        <Typography variant="h2">Veterans Resources</Typography>
        <Typography variant="body1">
        
        <p> There are many veteran resources to help with mental health disparities. </p>
        
         <p>1. Department of Veterans Affairs (VA) Mental Health Services: 
          The VA provides a range of mental health services for veterans including counseling, 
          therapy, and psychiatric medication management. 
          They have Vet Centers across the country that offer individual and group counseling.</p>
        
         <p>2. Veterans Crisis Line: This is a confidential toll-free hotline (1-800-273-8255) 
          that veterans can call for immediate crisis intervention. 
          They also offer a text messaging service (send a text to 838255) and 
          online chat for support.</p>

        <p>3. Veterans Service Organizations (VSOs): Organizations like the Veterans of Foreign Wars (VFW),
          American Legion, and Disabled American Veterans (DAV) often provide resources
          and support for veterans' mental health needs. They may offer counseling, peer support groups, 
          and assistance navigating VA benefits.</p>

        <p>4. Military OneSource: This is a Department of Defense-funded program that provides
         a range of support services to service members and their families, 
         including confidential non-medical counseling for a variety of issues, including mental health.</p>

        <p>5. Community Mental Health Centers: Many communities have mental health centers that offer counseling 
          and therapy services, some of which may be tailored specifically for veterans.</p>

        <p>6. Online Resources: Websites like MakeTheConnection.net, operated by the VA, offer resources, videos, 
          and personal stories related to mental health challenges faced by veterans. 
          There are also online support groups and forums where veterans
          can connect with others who have had similar experiences.</p>

        <p>7. Peer Support Programs: Programs like the VA's Peer Specialist program train veterans who have successfully 
          dealt with mental health challenges to provide support and mentorship to their fellow veterans.</p>

        <p>8. Employment and Education Assistance: Programs that assist veterans with finding employment or furthering 
          their education can indirectly support mental health by providing a sense of purpose and stability.</p>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          overflow: "auto",
        }}
      >
        <Grid container spacing={2}>
          {[1, 2, 3].map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="What is Combat Stress?"
                  subheader="Understanding Causes, Signs, and Treatment"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={VetImage}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Post-traumatic stress disorder (PTSD) is a diagnosed
                    condition that can develop after a person is exposed to a
                    traumatic event. PTSD is a very common condition for many
                    veterans after military service. Symptoms can include
                    disturbing thoughts, feelings, or dreams related to the
                    events, mental or physical distress, difficulty sleeping,
                    and changes in how a person thinks and feels.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>What is a Traumatic Brain Injury?</Typography>
                    <Typography paragraph>
                      PTSD can occur after witnessing or experiencing a
                      traumatic event. For veterans, this can stem from combat,
                      training, or military sexual trauma.
                    </Typography>
                    <Typography paragraph>PTSD Symptoms</Typography>
                    <Typography paragraph>
                      According to the National Institute of Mental Health,
                      there are four types of symptoms:
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
