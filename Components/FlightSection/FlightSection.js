import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlightSectStyles } from "./FlightSectStyles"; 

const FlightSection = () => {
  return (
    <View>
       <Text style={FlightSectStyles.textFlight}>Upcoming Flight</Text>
        <View style={FlightSectStyles.viewTravel}>
            <View style={FlightSectStyles.viewUpTravel}>
                <View style={FlightSectStyles.textLeft}>
                    <Text style={FlightSectStyles.textUpper}>SIN</Text>
                    <Text style={FlightSectStyles.textLower}>Singapore</Text>
                </View>
                <View style={FlightSectStyles.ViewAirPlan}>
                    <Image source={require('../../assets/Frame-13.png')} style={FlightSectStyles.airPlan}/>
                </View>
                <View style={FlightSectStyles.textRight}>
                    <Text style={FlightSectStyles.textUpperScnd}>LAX</Text>
                    <Text style={FlightSectStyles.textLower}>Los Angeles</Text>
                </View>
            </View>
            <View style={FlightSectStyles.separator} />
            <View style={FlightSectStyles.viewDownTravel}>
                <Text style={FlightSectStyles.dateDepart}>Departs on: 1 May, 08:00 AM</Text>
                <Text style={FlightSectStyles.remainingDays}> <Text style={FlightSectStyles.boldText}>4 days </Text> to go</Text>
            </View>
        </View>
    </View>
  );
};

export default FlightSection;