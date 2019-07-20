import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  }
}));

class List_ele extends React.Component {
    render() {
        const classes = useStyles;
        return (
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="lg">
                <main>
                  <Grid container spacing={4} className={classes.cardGrid}>
                      <Grid item key={this.props.element.itemname} xs={12} md={12}>
                        <CardActionArea component="a" href="#">
                          <Card className={classes.card}>
                            <div className={classes.cardDetails}>
                              <CardContent>
                                <Typography component="h2" variant="h5">
                                  {this.props.element.itemname + '   ' + this.props.element.category}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                  {this.props.element.date + '   ' + this.props.element.price}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                  {this.props.element.description}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                  More info...
                                </Typography>
                              </CardContent>
                            </div>
                            <Hidden xsDown>
                              <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                              />
                            </Hidden>
                          </Card>
                        </CardActionArea>
                      </Grid>
                  </Grid>
                </main>
              </Container>
            </React.Fragment>
          );

    }
}

// class List_ele extends React.Component {

//     render() {
//         return (
//             <div className="row">

//                 <div className="col-md-6">
//                     <a href="#">
//                         <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/200X200" alt=""/>
//                     </a>
//                 </div>

//                 <div className="col-md-6">
//                     <div className="row">
//                         <div className="col-md-10">
//                             <a href="#">                        <h5>{this.props.element.itemname}</h5>
//                             </a>
//                         </div>

//                     <div className="col-md-2">
//                         <h4>{'$'+ this.props.element.price}</h4>
//                         <h4>{this.props.element.category}</h4>
//                     </div>

//                 </div>

//                     <p>{this.props.element.description}</p>
//                     {/*<a className="btn btn-primary" href="#">View Product</a>*/}

//                 </div>
//             </div>
//         );
//     }
//     }

export default List_ele;