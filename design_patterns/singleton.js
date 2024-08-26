const Singleton = {
    start: () => console.log('App has started'),
    update: () => console.log('App has updated'),
}

Object.freeze(Singleton)

Singleton.start()
Singleton.update()

Singleton.name = "Robert"
console.log(Singleton)