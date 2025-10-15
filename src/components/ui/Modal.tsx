// src/components/ui/Modal.tsx
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: Props) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Centered Modal */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-60 flex items-center justify-center p-4"
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-xl md:max-w-3xl lg:max-w-4xl max-h-[95vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="relative flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h2
                id="modal-title"
                className="text-lg font-semibold text-gray-900 dark:text-gray-100"
              >
                {title}
              </h2>
              <button
                onClick={onClose}
                aria-label="닫기"
                className="absolute right-4 top-4 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <X size={20} />
              </button>
            </header>
            <div className="overflow-y-auto p-4 mb-2 flex-1">{children}</div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default Modal;
