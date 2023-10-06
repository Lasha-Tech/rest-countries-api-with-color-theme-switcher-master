const CountryDetails = ({target, value, countryInformation, day}) => {
    let result;

    if(countryInformation) {
        if(value) {
            Object.keys(target).map((key, index) => {
            if(index === 0) {
                const objValue = target[key]
                result = objValue[value]
            }
            })
        } else {
            Object.keys(target).map((key, index) => {
            if(index === 0) {
                const objValue = target[key]
                result = objValue
            }
            })
        }

    }

    return (
        <p className="country-details"
        style={{color: day ? "#111517" : "#FFF"}}>
            {result}
            </p>
    );
}
 
export default CountryDetails;

