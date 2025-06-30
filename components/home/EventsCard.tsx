import Image from "next/image";
import CustomButton from "../ui/CustomButton";

/**
 * EventCard component renders a card displaying event information.
 *
 * This component displays a card with a background image, title, date, location,
 * and a "Register" button. The card has a hover effect and the button is styled
 * to change colors on hover, indicating interactivity.
 *
 * The component does not manage any state or side effects. It is purely
 * responsible for rendering the UI.
 *
 * @param {IEventCardProps} props - Props containing the event information.
 * @returns {JSX.Element} JSX element representing the event card.
 */
export const EventCard = ({ event }: IEventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
      <Image
        src={event.image}
        alt={event.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <span className="mr-2">📅</span> <p>{event.date}</p>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <span className="mr-2">📍</span>{" "}
          {/* Replace with an icon library if available */}
          <p>{event.location}</p>
        </div>
        <CustomButton as="button" btnText="Register" handleClick={() => {}} />
      </div>
    </div>
  );
};
