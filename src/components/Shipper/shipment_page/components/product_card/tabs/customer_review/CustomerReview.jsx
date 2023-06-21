import Style from "./customer_review.module.css";
import ReviewCard from "./ReviewCard";
const CustomerReview = () => {
    return (
        <div style={{ padding: '1em 1em 0 1em' }}>
            <div className="flex flex-wrap gap-2">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>
        </div>
    );
}

export default CustomerReview;