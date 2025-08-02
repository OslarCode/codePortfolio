// src/components/sections/Contact.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`px-6 py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-Playfair font-bold mb-6">Contact</h2>
        <p className="text-lg font-Madefor mb-12">
          Do you have a project in mind or an idea you'd like to discuss? Don't
          hesitate to write to me..
        </p>
      </motion.div>

      <form
        className="max-w-2xl mx-auto space-y-6"
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Example: Jane doe"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="mail@example.com"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <label htmlFor="message" className="block text-sm font-semibold mb-1">
            Menssage
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 resize-none"
            required
          />
        </motion.div>

        <motion.div
          className="text-center pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button
            type="submit"
            className="inline-block px-8 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </section>
  );
};

Contact.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Contact;
