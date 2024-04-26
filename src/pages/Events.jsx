import PropTypes from 'prop-types';

function Events({ events }) {
    return (
        <div className="p-8 flex flex-col-reverse flex-grow">
            {events && events.map((event) => (
                <div key={event.id} className="mb-10 bg-white shadow-lg rounded-lg overflow-hidden">
                    <h2 className="text-3xl text-gray-800 font-bold px-6 pt-6">{event.name}</h2>
                    <p className="text-gray-600 px-6 mb-4">{event.description}</p>
                    <div className="overflow-hidden relative">
                        <div className="whitespace-nowrap animate-marquee">
                            {event.images.concat(event.images).map((image, index) => (  // Duplicate the array of images
                                <img
                                    key={`${image.id}-${index}`}  // Unique key for duplicated items
                                    src={image.url}
                                    alt={`Image from ${event.name}`}
                                    className="inline-block w-auto h-auto max-h-48 object-cover mr-4"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

Events.propTypes = {
    events: PropTypes.array.isRequired
};

export default Events;
