import Global from "@/Global";
import axios from "axios";

export default class DepartamentosService {

    getDepartamentos(){
        return new Promise(function (resolve){
            var request = Global.url + "api/departamentos";
            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

    findByOne(id){
        return new Promise(function(resolve){
            var request = Global.url + "api/departamentos/" + id;

            axios.get(request).then(response => {
                resolve(response.data)
            })
        })
    }

    postDepartamento(departamento){
        return new Promise(function(resolve){
            var request = Global.url + "api/departamentos";
            axios.post(request, departamento).then(response => {
                resolve(response.data)
            })
        })
    }

    putDepartamento(departamento){
        return new Promise(function(resolve){
            var request = Global.url + "api/departamentos";
            axios.put(request, departamento).then(() => {
                resolve()
            })
        })
    }

    deleteDepartamento(id){
        return new Promise(function(resolve){
            var request = Global.url + "api/departamentos/" + id;
            axios.delete(request).then(() => {
                resolve()
            })
        })
    }
}