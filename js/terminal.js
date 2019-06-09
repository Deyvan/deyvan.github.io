function load(){
    terminal = []

    var id = "terminal"
    var doc = document.getElementById(id)
    var buffer = []
    var tick = 1000/24
    var speed = tick
    var charsInTick = 1
    var prikols = ["Не готово!", "Не трош, а то кусь", "В будущем... (наверно)", "Привэд", "Скоро"]

    // всякая полезность наверно

    var addHtmltext = function(text){
        doc.innerHTML = doc.innerHTML + text.toString()
    }

    var newLine = function(){
        doc.innerHTML = doc.innerHTML + "<br>"
    }

    // функции для созданиe "анимации"

    terminal.add = function(text){
        var text = text.toString()
        buffer.push({type: "text", data: text})
    }

    terminal.newline = function(){
        buffer.push({type: "newLine"})
    }

    terminal.speed = function(value){
        buffer.push({type: "speed", data: value})
    }

    terminal.charspertick = function(value){
        buffer.push({type: "charsInTick", data: value})
    }

    terminal.sleep = function(ms){
        buffer.push({type: "sleep", data: ms})
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

            if(shift.type === "sleep"){
                buffer.shift()
                return shift.data
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

    var run = function(){
        setTimeout(function(){
            run()
        }, update())
    }

    run()

    terminal.speed(1)
    terminal.add("Загрузка...")

    terminal.sleep(1000)
    terminal.newline()

    terminal.add("OS Версии: 19.01")
    terminal.newline()
    terminal.add("Разработчик: Deyvan")

    var randomPrikol = prikols[Math.floor(Math.random() * prikols.length)]
    
    terminal.newline()
    terminal.newline()
    terminal.add("root: " + randomPrikol)








}

