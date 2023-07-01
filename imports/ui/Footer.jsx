import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import LinkedIn from "@mui/icons-material/LinkedIn";

const styles = {
    footer: {
        marginTop: "40px",
        minHeight: "200px",
    },
    itemLeft: {
        marginTop: "auto",
        marginBottom: "auto",
        textAlign: "center",
    },
    itemRight: {
        marginTop: "auto",
        marginBottom: "auto",
        textAlign: "center"
    },
    social: {
        width: "40px",
        height: "40px",
    },
}

const Footer = () => (
    <Grid container spacing={2} style={styles.footer}>
        <Grid style={styles.itemLeft} item md={6} xs={12}>
            <Link href="https://linkedin.com/company/domesoftware">
                <LinkedIn style={styles.social}/>
            </Link>
        </Grid>
        <Grid style={styles.itemRight} item md={6} xs={12}>
          <div><Link href="https://dome.software">Dome Software Incorporated</Link></div>
          <div>1018 N 5th St Ste 7</div>
          <div>Abilene, Texas 79601</div>
          <div><Link href="tel:13252619612">1-325-261-9612</Link></div>
          <diV><Link
              href="mailto:howdy@dome.software"
            >howdy@dome.software</Link></diV>
        </Grid>
    </Grid>
);
export default Footer;