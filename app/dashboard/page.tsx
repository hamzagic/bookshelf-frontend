import Card from '@/components/card/Card';
import BookItem from '@/components/book-item/BookItem';
import styles from './page.module.css';
import LatestActivity from '@/components/latest-activities/LatestActivity';
import Calendar from "@/components/calendar/Calendar";
import ActivityDetails from '@/components/activity-details/ActivityDetails';
import RecentAdded from '@/components/recent-added/RecentAdded';

const DashboardPage = () => {
  return (
    <>
      <h1 className={styles.h1}>Dashboard</h1>
      <div className={styles.container}>
        <Calendar />
        <Card title="April 8, 2024">
          <ActivityDetails />
        </Card>
        <Card title='Latest Activities'>
          <LatestActivity />
        </Card>
        <Card title='Recent Added Books'>
          <RecentAdded />
        </Card>
      </div>
    </>
  );
};

export default DashboardPage;
