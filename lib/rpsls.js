// arrays for values in each type of game
const rps_array = ["rock", "paper", "scissors"];
const rpsls_array = ["rock", "paper", "scissors", "lizard", "spock"];

// function that gets the result for the rps game

function rps_result(player_string, opponent) {
    var player = player_string.toLowerCase()
    if(player == opponent) return "tie";
    else if(player == "scissors") {
        if(opponent == "rock")
            return "lose";
        else
            return "win";
    }
    else if(player == "rock") {
        if(opponent == "paper")
            return "lose";
        else
            return "win";
    }
    else if(player == "paper") {
        if(opponent == "scissors")
            return "lose";
        else
            return "win";
    }
}

// function that sends rps output depending on whether there is an argument and what it is

export function rps(string) {
    var random = rps_array[Math.floor(Math.random() * rps_array.length)];
    if(string == undefined)
        return {"player": random};

    var lower = string.toLowerCase();
    if(lower != "rock" && lower != "scissors" && lower != "paper")
        console.error(string + " is out of range.");
    else {
        var result = rps_result(string, random);
        return {"player": string, "opponent": random, "result": result};
    }
}

// function that gets the result for the rpsls game

function rpsls_result(player_string, opponent) {
    var player = player_string.toLowerCase()
    if(player == opponent) return "tie";
    else if(player == "scissors") {
        if(opponent == "rock" || opponent == "spock")
            return "lose";
        else
            return "win";
    }
    else if(player == "rock") {
        if(opponent == "paper" || opponent == "spock")
            return "lose";
        else
            return "win";
    }
    else if(player == "paper") {
        if(opponent == "scissors" || opponent == "spock")
            return "lose";
        else
            return "win";
    }
    else if(player == "spock") {
        if(opponent == "paper" || opponent == "lizard")
            return "lose";
        else
            return "win";
    }
    else if(player == "lizard") {
        if(opponent == "rock" || opponent == "scissors")
            return "lose";
        else
            return "win";
    }
}

// function that sends rpsls output depending on whether there is an argument and what it is

export function rpsls(string) {
    var random = rpsls_array[Math.floor(Math.random() * rpsls_array.length)];
    if(string == undefined)
        return {"player": random};

    var lower = string.toLowerCase();
    if(lower != "rock" && lower != "scissors" && lower != "paper" && lower != "lizard" && lower != "spock")
        // console.error(string + " is out of range.");
        return undefined
    else {
        var result = rpsls_result(string, random);
        return {"player": string, "opponent": random, "result": result};
    }
}