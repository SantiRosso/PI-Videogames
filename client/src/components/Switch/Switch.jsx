import "./Switch.css";

const Switch = () => {
    return(
        <div>
            <input hidden="" class="check-icon" id="check-icon" name="check-icon" type="checkbox"/>
            <label class="icon-menu" for="check-icon">
                <div class="bar bar--1"></div>
                <div class="bar bar--2"></div>
                <div class="bar bar--3"></div>
            </label>
        </div>
    )
}

export default Switch;