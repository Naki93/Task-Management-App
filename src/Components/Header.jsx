//Create a variable that will store current date and time
const currentDate = new Date()

//Create a variable the will store the current hours 
const currentHour = currentDate.getHours();
//Create a function that specifies the date and time format using "style" options
//Request a weekday along with a long date
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date)
}

//Create a function that will display current time 
function currentTime() {
    let greeting;

    if (currentHour < 12) {
        greeting = 'Good morning! ☕';
    } else if (currentHour >= 12 && currentHour < 17) {
        greeting = 'Good afternoon! 🌞';
    } else {
        greeting = 'Good evening! 🌙';
    }
    return greeting;
}

function Header({ completed }) {
    return (
        <div className="flex justify-center ">
            <h1 className="mt-4 text-2xl">{currentTime()}</h1>
            {/* <p>You have {completed} Todos</p> */}

        </div>
    )
}

export default Header