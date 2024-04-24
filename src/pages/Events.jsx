import PropTypes from 'prop-types';

function Events({ events }) {
    return (
        <div className="p-5 flex-grow-1">
            {events.map((event) => (
                <div key={event.id} className="mb-10">
                    <h2 className="text-2xl text-gray-800 font-bold mb-2">{event.name}</h2>
                    <p className="text-gray-500 mb-4">{event.description}</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {event.images.map((image) => (
                                <img
                                    key={image.id}
                                    src={image.url}
                                    alt={`Image from ${event.name}`}
                                    className="w-full h-auto object-cover rounded transform hover:scale-110 transition-transform duration-300"
                                />
                        ))}
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
