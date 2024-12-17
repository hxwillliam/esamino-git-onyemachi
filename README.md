# esamino-git-onyemachi

Passaggi per eseguire l'app
    Apri terminale
    git clone https://github.com/hxwillliam/esamino-git-onyemachi.git
    cd /esamino-git-onyemachi

    MAC OS:
        open index.html

    LINUX:
        xdg-open index.html

    WINDOWS:
        start index.html

Funzioni implementati
1. `saveTodos()`
- Salva la lista dei todos nel localStorage

2. `loadTodos()`
- Carica i todos dal localStorage e li converte in oggetti Todo

4. `addTodo(title, category)`
- Aggiunge un nuovo todo alla lista con validazione input

5. `deleteTodo(id)`
- Elimina un todo specifico tramite ID

6. `toggleComplete(id)`
- Cambia lo stato di completamento di un todo

7. `filterTodos(filterType, category)`
- Filtra i todos per stato (completati/attivi) o categoria

8. `editTodo(id, newTitle, newCategory)`
- Modifica titolo e categoria di un todo esistente

9. `handleTodos(filterType, category)`
- Gestisce la visualizzazione dei todos nell'interfaccia

10. `startEdit(id)`
- Mostra il form di modifica per un todo

11. `cancelEdit(id)`
- Nasconde il form di modifica

12. `saveEdit(id)`
- Salva le modifiche apportate a un todo

13. `filterByCategory()`
- Filtra i todos per categoria selezionata

14. `updateStats()`
- Aggiorna le statistiche (totale, attivi, completati)

15. Event Listener sul form
- Gestisce l'aggiunta di nuovi todos tramite il form

Operazioni Git utilizzate
    init
    add .
    commit -m""
    push
    commit -am""
    merge
    branch
    log
    status
    checkout
    checkout -b
    checkout -
    merge --squash
    rebase
    rebase -i --autosquash
    pull
    commit --fixup
    revert
    stash
    stash list
    stash pop