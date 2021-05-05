import React from 'react'
import Link from "react-router-dom"
import Implants from "./Implants"
import Prostheses from "./Prostheses"
import Inhalers from "./Inhalers"
import Brushes from "./Brushes"
import Braces from "./Braces"
import ToothPaste from "./ToothPaste"
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from "redux";
import MainCategories from "./categories/MainCategory"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from "@material-ui/core/Grid"

function ShopHome() {
  return (
    <div>
      <MainCategories/>      
    </div>
  )
}

export default ShopHome


