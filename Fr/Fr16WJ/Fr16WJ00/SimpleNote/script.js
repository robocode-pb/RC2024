hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
const PASSWORD = 1509442; // hashCode('1234') 

let value = prompt('Пароль', "1234");
if(hashCode(value) == PASSWORD){
    // відобразити збережені
    $('#notesContainer').prepend(
        window.localStorage['note']
    );
} else {
    $('#saveButton').hide();
    $('#addNoteButton').hide();
    alert('Спробуйте ще раз')
}

$(document).ready(function() {
    // prompt('Пароль', 'Введіть пароль', '1234'
    //     , function(evt, value) { 
    //         success('Супер, ввели' + value) 
    //         if(hashCode(value) == PASSWORD){
    //             // відобразити збережені
    //             $('#notesContainer').prepend(
    //                 window.localStorage['note']
    //             );
    //         } else{
    //             console.error('Спробуйте ще раз')
    //         }
    //     }
    //     , function() { console.error('Спробуйте ще раз') });

    // функція для збереження
    $('#saveButton').click(function(){
        window.localStorage['note'] = $('#notesContainer').html();
    })

    $('#addNoteButton').click(function(){
        let date = new Date().toLocaleString();

        let newNote = $('<div>', {class:'note'});

        //додати заголовок нотатці
        
        newNote.append($('<div>', {
            contentEditable: true,
            text: 'Нова нотатка...',
            class: 'noteText'
        }));
        newNote.append($('<h4>', {
            text: date
        }));
        newNote.append($('<button>', {
            text: 'X', 
            class: 'deleteButton'
        }));
        newNote.append($('<button>', {
            text: 'Archive', 
            class: 'archiveButton'
        }));
        // додати кнопку архівувати
        $('#notesContainer').prepend(newNote);
    });

    $('#notesContainer').on('click', '.deleteButton', function() {
        $(this).parent().remove();
    });
    
    // додати функцію архівування
    $('#notesContainer').on('click', '.archiveButton', function() {
        $(this).parent().toggleClass('archive');
    });

});
