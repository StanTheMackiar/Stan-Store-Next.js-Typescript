import Link from "next/link";
import styles from "../../../../styles/NavMenu.module.scss";
import { useState, useEffect } from "react";
// import { categories } from "../Header/ToggleMenu/Items";
import { Fade, ListItemButton, Paper } from "@mui/material";
import { getCategories } from "../../../../services/getCategories";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([] as string[] | []);

  useEffect(() => {
    const getCategory = async () => setCategories(await getCategories());
    getCategory();
  }, []);

  return (
    <section className={styles.container}>
      <nav className={styles.navMenu}>
        <div className={styles.menuItem}>
          <Link href="/">
            <a>
              <span>Home</span>
            </a>
          </Link>
        </div>
        <div className={styles.menuItem}>
          <Link href="/store">
            <a>
              <span>Store</span>
            </a>
          </Link>
        </div>

        <div
          className={styles.menuItem}
          onMouseOver={() => setIsOpen(true)}
          onMouseOut={() => setIsOpen(false)}>
          <Link href="/store">
            <a>
              <span>Categories</span>
            </a>
          </Link>
          {categories.length > 0 && (
            <Fade
              in={isOpen}
              timeout={400}>
              <Paper className={styles.list}>
                {categories.map((category) => (
                  <Link
                    href={`/categories/${category}`}
                    key={category}>
                    <a>
                      <ListItemButton>
                        <span className={styles.listElement}>{category}</span>
                      </ListItemButton>
                    </a>
                  </Link>
                ))}
              </Paper>
            </Fade>
          )}
        </div>
      </nav>
    </section>
  );
};

export default NavMenu;
