import styles from './navBar.css'

export default () => {
  return (
    <div class="mt-10">
      <div class="nav-menu">
        <div class="nav-menu-logo">
          <div>
            <img src="/assets/images/logo.png" alt="vita"/>
          </div>
          <div>
            <img src="/assets/images/vertical-line-icon.svg" alt="vita"/>
          </div>
          <div>
            <span class="text-2xl">VitaSens</span>
          </div>
        </div>
        <div class="nav-menu-controls ">
          <div class="nav-menu-item">
            <div>
              <img src="/assets/images/house-icon.svg" alt=""/>
              <a>Головна</a>
            </div>
          </div>
          <div class="nav-menu-item">
            <div>
              <img src="/assets/images/document-icon.svg" alt=""/>
              <a>Послуги</a>
            </div>
          </div>
          <div class="nav-menu-item">
            <div>
              <img src="/assets/images/list-icon.svg" alt=""/>
              <a>Чек-апи</a>
            </div>
          </div>
          <div class="nav-menu-item">
            <div>
              <img src="/assets/images/price-icon.svg" alt=""/>
              <a>Вартість</a>
            </div>
          </div>
          <div class="nav-menu-item">
            <div>
              <img src="/assets/images/doctors-icon.svg" alt=""/>
              <a>Лікарі</a>
            </div>
          </div>
          <div class="nav-menu-item">
            <div>
              <img src="/assets/images/camera-icon.svg" alt=""/>
              <a>Галерея</a>
            </div>
          </div>
          <div class="nav-menu-item">
            <div>
              <img src="/assets/images/phone-icon.svg" alt=""/>
              <a>Контакти</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="nav-menu">клiніка Доктора Саморукової</span>
      </div>
    </div>
  );
}
