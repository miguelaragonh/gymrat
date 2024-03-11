
import "../style/NavBar.css";

export default function NavBar(){

    return (
        <>
        <div class="tab-container">
            <input type="radio" name="tab" id="tab1" class="tab tab--1" />
            <label class="tab_label" for="tab1">Inicio</label>

            <input type="radio" name="tab" id="tab2" class="tab tab--2" />
            <label class="tab_label" for="tab2">Ejercicios</label>

            <input type="radio" name="tab" id="tab3" class="tab tab--3" />
            <label class="tab_label" for="tab3">Contarnos</label>

            <div class="indicator"></div>
        </div>
        </>
    );
}