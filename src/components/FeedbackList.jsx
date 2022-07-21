import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem"

export default function FeedbackList({feedback, handleDelete}) {
    if (!feedback || feedback.length === 0) {
      return <p>No Feedback yet</p>
    }

    return (
      <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    )

}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,

    }
    )
  )
}
