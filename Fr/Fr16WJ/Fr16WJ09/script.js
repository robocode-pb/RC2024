hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
const password = '1480189729'; //hashCode('235687')
$(document).ready(function() {

  alertify.prompt( 'Enter your password', ''
  , function(evt, value) { 
    if (hashCode (value) == password){
      alertify.success('Password valid') 
      // відобразити збережені
      $('#notesContainer').prepend(
        window.localStorage['note']
      );
    }else{
      alertify.error('Cancel') 
      $('#addNoteButton').hide();
      $('#saveNoteButton').hide();
    }
  }
  , function() { alertify.error('Cancel') });
  
  // функція для збереження
  $('#addNoteButton').click(function(){
      let date = new Date().toLocaleString();
      let newNote = $('<div>', {class:'note'});

      //додати заголовок нотатці
      newNote.append($('<div>', {
          contentEditable: true,
          text: 'New note...',
          class: 'noteText'
      }));
      newNote.append($('<h4>', {
          text: date
      }));
      newNote.append($('<button>', {
          text: 'delete', 
          class: 'deleteButton'
      }));
      // додати кнопку архівувати
      newNote.append($('<button>', {
        text: 'archive', 
        class: 'archiveButton'
    }));
    $('#notesContainer').prepend(newNote);
  });

  $('#saveNoteButton').click(function(){
    window.localStorage['note'] = $('#notesContainer').html();
  });

  $('#notesContainer').on('click', '.deleteButton', function() {
      $(this).parent().remove();
  });

  $('#notesContainer').on('click', '.archiveButton', function() {
    $(this).parent().toggleClass('archiveNotes');
});
  // додати функцію архівування
});
