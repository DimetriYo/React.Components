import massageKitty from '../../assets/massageCat.gif';
import emptyPokets from '../../assets/nothingFound.png';

export function PreLoader() {
  return (
    <div style={{ display: 'none' }}>
      <img src={massageKitty} />
      <img src={emptyPokets} />
    </div>
  );
}

export { massageKitty, emptyPokets };
