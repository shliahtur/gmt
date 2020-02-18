
const overlay = document.createElement('div');
overlay.className = 'modal-overlay';

const modal = document.createElement('div');
modal.className = "modal-window";

const container = document.createElement('div');
container.className = "modal-body";

const closeBtn = document.createElement('div');
closeBtn.className = "close-btn";

overlay.onclick = (e) => cancelModal(e);
closeBtn.onclick = (e) => cancelModal(e);

const createModal = (inner) => { 
    inner.style = "display: block";
    container.innerHTML = '';
    container.appendChild(inner);
    modal.append(closeBtn, container)
    overlay.appendChild(modal)
    document.body.prepend(overlay);
} 

const cancelModal = (e) => {
    if( 
        e.target.className === "modal-overlay" ||
        e.target.className === "close-btn" ||
        e.target.className === "modal-cancel-btn"
        ){
            overlay.remove();
        }
}

export default createModal;
