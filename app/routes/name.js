import Route from '@ember/routing/route';

export default class NameRoute extends Route {
    model(){
        return fetch('api/name')
    }
}
