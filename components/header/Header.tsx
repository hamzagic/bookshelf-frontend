"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "../button/Button";
import ProfileIcon from "../profile-icon/ProfileIcon";
import styles from "./Header.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Tooltip from "@mui/material/Tooltip";
import { useUser } from "../store/appContext";

const Header = () => {
  const router = useRouter();
  const user = useUser();
  console.log("fsfad", user);

  const newBookHandler = () => {
    router.push("/addbook");
  };
  const dashboardHandler = () => {
    if (user.isLoggedIn) {
      router.push("/dashboard");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer} onClick={dashboardHandler}>
        <Image
          src="/images/logo-cropped.png"
          height={40}
          width={40}
          alt=""
          className={styles.logo}
        />
        <div>BookShelf</div>
      </div>
      {user?.user?.isLoggedIn && (
        <div className={styles.buttons}>
          <Button text="Add New Book" onclick={newBookHandler} />
          <Tooltip title="My Books">
            <Link href="/books">
              <AutoStoriesIcon
                fontSize="large"
                sx={{ color: "#e214d5" }}
                className={styles.icons}
              />
            </Link>
          </Tooltip>
          <Tooltip title="Analytics">
            <Link href="/statistics">
              <AnalyticsIcon
                fontSize="large"
                sx={{ color: "#e214d5" }}
                className={styles.icons}
              />
            </Link>
          </Tooltip>
          <Tooltip title="Settings">
            <Link href="/settings">
              <SettingsIcon
                fontSize="large"
                sx={{ color: "#e214d5" }}
                className={styles.icons}
              />
            </Link>
          </Tooltip>
          <ProfileIcon />
        </div>
      )}
    </div>
  );
};

export default Header;
