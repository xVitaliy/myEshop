import React from "react";
import {
  List, ListItem, ListItemButton
} from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./style.module.css";
import useStyle from "./footerStyle";
import technoIcon from "./footerIcon/ceil-left.svg";
import FooterRightContacts from "./FooterRightContacts";

const Footer = () => {
  const styles = useStyle();
  const MenuList = ["Все книги", "Новинки", "Новости", "О нас", "Контакты"]
    .map((menuItem) => (
      <ListItem key={Math.random()}>
        <ListItemButton>
          <Link to="/">{ menuItem }</Link>
        </ListItemButton>
      </ListItem>
    ));

  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
        <div className={classes.footerContainer}>
          <List className={styles.listContainer}>
            { MenuList }
            <ListItem>
              <ListItemButton>
                <img src={technoIcon} alt="technoIcon" />
                <Link to="/">Служба поддержки</Link>
              </ListItemButton>
            </ListItem>
          </List>
          <FooterRightContacts />
        </div>
      </div>
      <hr className={classes.footerHr} />
      <div className={classes.floorWrapper}> Внимание! Обращаем Ваше внимание на то, что
        данный интернет-сайт
        носит исключительно
        информационный характер и ни при каких условиях не является публичной офертой,
        определяемой положениями ч.2 ст.437 ГК РФ. Для получения подробной информации,
        пожалуйста, обращайтесь к сотрудникам компании Parta
      </div>
    </footer>
  );
};
export default Footer;
