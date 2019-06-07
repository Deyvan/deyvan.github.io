function load(){
    var id = "aye"
    var doc = document.getElementById(id)
    var print = console.log
    var buffer = []
    var tick = 1000/24
    var speed = tick
    var charsInTick = 1

    // всякая полезность наверно

    var addHtmltext = function(text){
        doc.innerHTML = doc.innerHTML + text.toString()
    }

    var newLine = function(){
        doc.innerHTML = doc.innerHTML + "<br>"
    }

    // функции для созданиe "анимации"

    var addText = function(text){
        var text = text.toString()
        buffer.push({type: "text", data: text})
    }

    var addNewLine = function(){
        buffer.push({type: "newLine"})
    }

    var setSpeed = function(value){
        buffer.push({type: "speed", data: value})
    }

    var setCharsInTick = function(value){
        buffer.push({type: "charsInTick", data: value})
    }

    // апдейти и другое

    var update = function(){
        if(buffer.length > 0){
            var shift = buffer.shift()
            buffer.unshift(shift)

            if(shift.type === "newLine"){
                newLine()
                buffer.shift()
                return tick
            }

            if(shift.type === "speed"){
                speed = shift.data
                buffer.shift()
                return tick
            }

            if(shift.type === "charsInTick"){
                charsInTick = shift.data
                buffer.shift()
                return tick
            }

            if(shift.type === "text"){
                if(shift.data.length > 0){
                    var char = shift.data.substr(0,charsInTick)
                    addHtmltext(char)

                    shift.data = shift.data.substr(charsInTick)

                    buffer.shift()
                    buffer.unshift(shift)

                    return speed
                }else{
                    buffer.shift()
                    return tick
                }
            }

        }else{
            return tick
        }
    }

    var start = function(){
        setTimeout(function(){
            start()
        }, update())
    }

    //  vaw govno script

    setSpeed(1)
    addText("Загрузка...")

    setSpeed(1000)
    addText("   ")
    addNewLine()

    setSpeed(1)
    addText("OS Версии: 19.01")
    addNewLine()
    addText("Разработчик: Deyvan <3")

    start()










}

