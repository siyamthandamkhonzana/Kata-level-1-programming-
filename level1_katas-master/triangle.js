let height = 6;

function Triangle(height){
    for(let begin = 1; begin <= height; begin++){
        console.log("#".repeat(begin));
    }
}

Triangle(height);