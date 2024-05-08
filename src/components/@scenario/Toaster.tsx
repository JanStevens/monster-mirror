import { createToaster } from '@ark-ui/react/toast';

import { IconButton, Toast } from 'components/@common';

export const [Toaster, toast] = createToaster({
  pauseOnInteraction: true,
  pauseOnPageIdle: true,
  placement: 'bottom-end',
  render(toast) {
    return (
      <Toast.Root>
        <Toast.Title fontSize="xl" fontWeight="normal">
          {toast.title}
        </Toast.Title>
        <Toast.Description fontSize="lg">{toast.description}</Toast.Description>
        <Toast.CloseTrigger asChild>
          <IconButton
            variant="ghost"
            aria-label="Close"
            size="sm"
            background="transparent"
          >
            {/* Inline the SVG icon so its always available */}
            <svg
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 500 500"
            >
              <path
                fillRule="evenodd"
                d="M402.915 38.907c-2.459.947-6.828 3.207-9.71 5.02-5.595 3.524-37.703 37.424-90.615 95.675-17.947 19.758-33.729 36.074-35.073 36.257-1.602.22-15.302-15.021-39.852-44.334-40.498-48.354-41.351-49.108-55.615-49.108-14.946 0-45.987 11.717-69.823 26.356-13.83 8.494-27.141 18.852-27.141 21.12 0 1.018 25.087 31.719 55.75 68.224 30.662 36.506 55.75 67.188 55.75 68.182 0 1.606-43.651 50.934-119.963 135.564-29.494 32.709-28.511 29.29-12.672 44.099 16.252 15.195 31.221 19.533 45.792 13.269 9.256-3.981 32.859-27.81 91.978-92.864 26.302-28.942 40.443-43.447 42.088-43.168 1.361.23 18.856 19.839 38.878 43.575 20.022 23.734 38.267 44.518 40.546 46.187 3.385 2.477 6.208 3.01 15.405 2.908 12.639-.14 23.006-2.858 41.336-10.842 21.581-9.399 55.75-31.56 55.75-36.157 0-1.004-25.082-31.721-55.736-68.26-30.655-36.538-55.742-67.226-55.75-68.194-.008-.967 32.335-37.845 71.874-81.952C428.843 102.798 458 69.115 458 67.42c0-4.625-17.043-21.15-26.877-26.061-9.576-4.783-19.839-5.675-28.208-2.452"
                clipRule="evenodd"
              />
            </svg>
          </IconButton>
        </Toast.CloseTrigger>
      </Toast.Root>
    );
  },
});
