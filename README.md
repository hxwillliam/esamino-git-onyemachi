# esamino-git-onyemachi

## Passaggi per eseguire l'app

1. Apri terminale
2. Clona il repository:
    ```bash
    git clone https://github.com/hxwillliam/esamino-git-onyemachi.git
    cd esamino-git-onyemachi
    ```

3. Apri l'app in base al tuo sistema operativo:
    - **MAC OS**:
        ```bash
        open index.html
        ```
    - **LINUX**:
        ```bash
        xdg-open index.html
        ```
    - **WINDOWS**:
        ```bash
        start index.html
        ```

## Funzioni implementate

1. `saveTodos()`
    - Salva la lista dei todos nel localStorage

2. `loadTodos()`
    - Carica i todos dal localStorage e li converte in oggetti Todo

3. `addTodo(title, category)`
    - Aggiunge un nuovo todo alla lista con validazione input

4. `deleteTodo(id)`
    - Elimina un todo specifico tramite ID

5. `toggleComplete(id)`
    - Cambia lo stato di completamento di un todo

6. `filterTodos(filterType, category)`
    - Filtra i todos per stato (completati/attivi) o categoria

7. `editTodo(id, newTitle, newCategory)`
    - Modifica titolo e categoria di un todo esistente

8. `handleTodos(filterType, category)`
    - Gestisce la visualizzazione dei todos nell'interfaccia

9. `startEdit(id)`
    - Mostra il form di modifica per un todo

10. `cancelEdit(id)`
    - Nasconde il form di modifica

11. `saveEdit(id)`
    - Salva le modifiche apportate a un todo

12. `filterByCategory()`
    - Filtra i todos per categoria selezionata

13. `updateStats()`
    - Aggiorna le statistiche (totale, attivi, completati)

14. Event Listener sul form
    - Gestisce l'aggiunta di nuovi todos tramite il form

## Operazioni Git utilizzate

- `init`
- `add .`
- `commit -m ""`
- `push`
- `commit -am ""`
- `merge`
- `branch`
- `log`
- `status`
- `checkout`
- `checkout -b`
- `checkout -`
- `merge --squash`
- `rebase`
- `rebase -i --autosquash`
- `pull`
- `commit --fixup`
- `revert`
- `stash`
- `stash list`
- `stash pop`