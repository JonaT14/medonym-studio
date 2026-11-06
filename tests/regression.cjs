const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html', 'utf8');
const script = html.match(/<script>\s*([\s\S]*?)<\/script>/)[1].split('(function () {')[0];
const c = vm.createContext({}); vm.runInContext(script, c);
const options = {ctx:{nom:'',prenom:'',ddn:'',ville:''}, customMasks:[], overrides:{}, wl:new Set(), ddnMode:'strict', dateMode:'strict', maskDocs:true, maskPlaces:true, shift:10};
function run(s, o={}) { return c.moAnonymize(s,{...options,...o}); }
let a=run('IPP: ABC123\nIPP: DEF456');
assert.equal(a.length, 2); assert.notEqual(a[0].token,a[1].token);
let b=run('IPP: ABC123\nIPP: DEF456\nIPP: ABC123');
assert.equal(b[0].token,b[2].token); assert.notEqual(b[0].token,b[1].token);
assert.equal(run('Élodie est suivie.',{ctx:{nom:'',prenom:'Élodie',ddn:'',ville:''}})[0].original,'Élodie');
assert.doesNotThrow(()=>run('CPTS HTA',{wl:new Set(['HTA'])}));
let d=run('Le 1er janvier 2024 puis le 01/01/2024',{dateMode:'shift'});
assert.equal(d.length,2); assert.equal(d[0].token,'[11/01/2024]'); assert.ok(d[1].token.startsWith('[11/01/2024'));
console.log('Regression checks passed');
