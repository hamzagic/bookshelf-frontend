import Card from '@/components/card/Card';
import BookItem from '@/components/book-item/BookItem';
import styles from './page.module.css';
import Header from '@/components/header/Header';
import LatestActivity from '@/components/latest-activities/LatestActivity';
import Calendar from "@/components/calendar/Calendar";
import ActivityDetails from '@/components/activity-details/ActivityDetails';

const DashboardPage = () => {
  return (
    <>
      <Header pageName='Dashboard' />
      <div className={styles.container}>
        <Calendar />
        <Card title="April 8, 2024">
          <ActivityDetails />
        </Card>
        <Card title='Latest Activities'>
          <LatestActivity />
        </Card>
        <Card title='Recent Added Books'>
          <BookItem />
        </Card>
      </div>
      {/* <div className={styles.calendar}> */}
      {/* </div> */}
    </>
  );
};

export default DashboardPage;
