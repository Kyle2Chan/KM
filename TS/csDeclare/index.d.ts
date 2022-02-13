
declare module 'csharp' {
    export default CSharp;
namespace CSharp {
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Array extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.Collections.IList, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Collections.ICollection
        {
            public get LongLength(): bigint;
            public get IsFixedSize(): boolean;
            public get IsReadOnly(): boolean;
            public get IsSynchronized(): boolean;
            public get SyncRoot(): any;
            public get Length(): number;
            public get Rank(): number;
            public static CreateInstance ($elementType: System.Type, ...lengths: bigint[]) : System.Array
            public CopyTo ($array: System.Array, $index: number) : void
            public Clone () : any
            public static BinarySearch ($array: System.Array, $value: any) : number
            public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: bigint) : void
            public static Copy ($sourceArray: System.Array, $sourceIndex: bigint, $destinationArray: System.Array, $destinationIndex: bigint, $length: bigint) : void
            public CopyTo ($array: System.Array, $index: bigint) : void
            public GetLongLength ($dimension: number) : bigint
            public GetValue ($index: bigint) : any
            public GetValue ($index1: bigint, $index2: bigint) : any
            public GetValue ($index1: bigint, $index2: bigint, $index3: bigint) : any
            public GetValue (...indices: bigint[]) : any
            public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any) : number
            public static BinarySearch ($array: System.Array, $value: any, $comparer: System.Collections.IComparer) : number
            public static BinarySearch ($array: System.Array, $index: number, $length: number, $value: any, $comparer: System.Collections.IComparer) : number
            public static IndexOf ($array: System.Array, $value: any) : number
            public static IndexOf ($array: System.Array, $value: any, $startIndex: number) : number
            public static IndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
            public static LastIndexOf ($array: System.Array, $value: any) : number
            public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number) : number
            public static LastIndexOf ($array: System.Array, $value: any, $startIndex: number, $count: number) : number
            public static Reverse ($array: System.Array) : void
            public static Reverse ($array: System.Array, $index: number, $length: number) : void
            public SetValue ($value: any, $index: bigint) : void
            public SetValue ($value: any, $index1: bigint, $index2: bigint) : void
            public SetValue ($value: any, $index1: bigint, $index2: bigint, $index3: bigint) : void
            public SetValue ($value: any, ...indices: bigint[]) : void
            public static Sort ($array: System.Array) : void
            public static Sort ($array: System.Array, $index: number, $length: number) : void
            public static Sort ($array: System.Array, $comparer: System.Collections.IComparer) : void
            public static Sort ($array: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
            public static Sort ($keys: System.Array, $items: System.Array) : void
            public static Sort ($keys: System.Array, $items: System.Array, $comparer: System.Collections.IComparer) : void
            public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number) : void
            public static Sort ($keys: System.Array, $items: System.Array, $index: number, $length: number, $comparer: System.Collections.IComparer) : void
            public GetEnumerator () : System.Collections.IEnumerator
            public GetLength ($dimension: number) : number
            public GetLowerBound ($dimension: number) : number
            public GetValue (...indices: number[]) : any
            public SetValue ($value: any, ...indices: number[]) : void
            public GetUpperBound ($dimension: number) : number
            public GetValue ($index: number) : any
            public GetValue ($index1: number, $index2: number) : any
            public GetValue ($index1: number, $index2: number, $index3: number) : any
            public SetValue ($value: any, $index: number) : void
            public SetValue ($value: any, $index1: number, $index2: number) : void
            public SetValue ($value: any, $index1: number, $index2: number, $index3: number) : void
            public static CreateInstance ($elementType: System.Type, $length: number) : System.Array
            public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number) : System.Array
            public static CreateInstance ($elementType: System.Type, $length1: number, $length2: number, $length3: number) : System.Array
            public static CreateInstance ($elementType: System.Type, ...lengths: number[]) : System.Array
            public static CreateInstance ($elementType: System.Type, $lengths: System.Array$1<number>, $lowerBounds: System.Array$1<number>) : System.Array
            public static Clear ($array: System.Array, $index: number, $length: number) : void
            public static Copy ($sourceArray: System.Array, $destinationArray: System.Array, $length: number) : void
            public static Copy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            public static ConstrainedCopy ($sourceArray: System.Array, $sourceIndex: number, $destinationArray: System.Array, $destinationIndex: number, $length: number) : void
            public Initialize () : void
        }
        class Object
        {
        }
        interface ICloneable
        {
        }
        class Type extends System.Reflection.MemberInfo implements System.Reflection.IReflect, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
        {
        }
        class Int64 extends System.ValueType implements System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>, System.IFormattable
        {
        }
        class Void extends System.ValueType
        {
        }
        class ValueType extends System.Object
        {
        }
        class Int32 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        interface IComparable
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IConvertible
        {
        }
        interface IEquatable$1<T>
        {
        }
        interface IFormattable
        {
        }
        interface Converter$2<TInput, TOutput>
        { (input: TInput) : TOutput; }
        interface MulticastDelegate
        { (...args:any[]) : any; }
        var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
        class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable
        {
        }
        interface Action$1<T>
        { (obj: T) : void; }
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>
        {
        }
        interface Comparison$1<T>
        { (x: T, y: T) : number; }
        interface Predicate$1<T>
        { (obj: T) : boolean; }
        class String extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.IEquatable$1<string>, System.Collections.Generic.IEnumerable$1<number>
        {
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
        }
        interface IDisposable
        {
        }
        class Byte extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        class IntPtr extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
        }
        class Single extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        interface IFormatProvider
        {
        }
        class Double extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        class Enum extends System.ValueType implements System.IComparable, System.IConvertible, System.IFormattable
        {
        }
        class Exception extends System.Object implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable
        {
        }
        class UInt64 extends System.ValueType implements System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>, System.IFormattable
        {
        }
        class UInt32 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        class UInt16 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable
        {
        }
        interface Func$1<TResult>
        { () : TResult; }
        interface Action
        { () : void; }
        var Action: { new (func: () => void): Action; }
        class Uri extends System.Object implements System.Runtime.Serialization.ISerializable
        {
        }
    }
    namespace System.Collections {
        interface IEnumerable
        {
        }
        interface IList extends System.Collections.IEnumerable, System.Collections.ICollection
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
        interface IComparer
        {
        }
        interface IEnumerator
        {
        }
        interface IDictionary extends System.Collections.IEnumerable, System.Collections.ICollection
        {
        }
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo
        {
        }
        interface ICustomAttributeProvider
        {
        }
        interface IReflect
        {
        }
    }
    namespace System.Runtime.InteropServices {
        interface _MemberInfo
        {
        }
        interface _Type
        {
        }
        interface _Exception
        {
        }
    }
    namespace System.Collections.Generic {
        interface IList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>
        {
        }
        interface ICollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>
        {
        }
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>
        {
        }
        interface IReadOnlyList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IEnumerable$1<T>
        {
        }
        interface IComparer$1<T>
        {
        }
        class List$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>
        {
            public get Capacity(): number;
            public set Capacity(value: number);
            public get Count(): number;
            public get_Item ($index: number) : T
            public set_Item ($index: number, $value: T) : void
            public Add ($item: T) : void
            public AddRange ($collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public AsReadOnly () : System.Collections.ObjectModel.ReadOnlyCollection$1<T>
            public BinarySearch ($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public BinarySearch ($item: T) : number
            public BinarySearch ($item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public Clear () : void
            public Contains ($item: T) : boolean
            public CopyTo ($array: System.Array$1<T>) : void
            public CopyTo ($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number) : void
            public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            public Exists ($match: System.Predicate$1<T>) : boolean
            public Find ($match: System.Predicate$1<T>) : T
            public FindAll ($match: System.Predicate$1<T>) : System.Collections.Generic.List$1<T>
            public FindIndex ($match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public FindLast ($match: System.Predicate$1<T>) : T
            public FindLastIndex ($match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public ForEach ($action: System.Action$1<T>) : void
            public GetEnumerator () : System.Collections.Generic.List$1.Enumerator<T>
            public GetRange ($index: number, $count: number) : System.Collections.Generic.List$1<T>
            public IndexOf ($item: T) : number
            public IndexOf ($item: T, $index: number) : number
            public IndexOf ($item: T, $index: number, $count: number) : number
            public Insert ($index: number, $item: T) : void
            public InsertRange ($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public LastIndexOf ($item: T) : number
            public LastIndexOf ($item: T, $index: number) : number
            public LastIndexOf ($item: T, $index: number, $count: number) : number
            public Remove ($item: T) : boolean
            public RemoveAll ($match: System.Predicate$1<T>) : number
            public RemoveAt ($index: number) : void
            public RemoveRange ($index: number, $count: number) : void
            public Reverse () : void
            public Reverse ($index: number, $count: number) : void
            public Sort () : void
            public Sort ($comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($comparison: System.Comparison$1<T>) : void
            public ToArray () : System.Array$1<T>
            public TrimExcess () : void
            public TrueForAll ($match: System.Predicate$1<T>) : boolean
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
        }
        interface IEnumerator$1<T> extends System.Collections.IEnumerator, System.IDisposable
        {
        }
        class Dictionary$2<TKey, TValue> extends System.Object implements System.Collections.IDictionary, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Runtime.Serialization.IDeserializationCallback, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
        class KeyValuePair$2<TKey, TValue> extends System.ValueType
        {
        }
        interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
        interface IDictionary$2<TKey, TValue> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
    }
    namespace System.Collections.ObjectModel {
        class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>
        {
        }
    }
    namespace System.Runtime.Serialization {
        interface ISerializable
        {
        }
        interface IDeserializationCallback
        {
        }
    }
    namespace System.Collections.Generic.List$1 {
        class Enumerator<T> extends System.ValueType implements System.Collections.Generic.IEnumerator$1<T>, System.Collections.IEnumerator, System.IDisposable
        {
        }
    }
    namespace Puerts {
        class ArrayBuffer extends System.Object
        {
            public Bytes : System.Array$1<number>
            public Count : number
            public constructor ($bytes: System.Array$1<number>)
            public constructor ($bytes: System.Array$1<number>, $count: number)
            public constructor ($ptr: System.IntPtr, $length: number)
        }
    }
    namespace UnityEngine {
        /** Representation of 2D vectors and points. */
        class Vector2 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector2>, System.IFormattable
        {
        /** X component of the vector. */
            public x : number/** Y component of the vector. */
            public y : number
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number/** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector2;
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector2(0, 0). */
            public static get zero(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 1). */
            public static get one(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, 1). */
            public static get up(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, -1). */
            public static get down(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(-1, 0). */
            public static get left(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 0). */
            public static get right(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector2;
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x and y components of an existing Vector2. */
            public Set ($newX: number, $newY: number) : void
            /** Linearly interpolates between vectors a and b by t. */
            public static Lerp ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Linearly interpolates between vectors a and b by t. */
            public static LerpUnclamped ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Moves a point current towards target. */
            public static MoveTowards ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number) : UnityEngine.Vector2
            /** Multiplies two vectors component-wise. */
            public static Scale ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale ($scale: UnityEngine.Vector2) : void
            public Normalize () : void
            public ToString () : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector2) : boolean
            /** Reflects a vector off the vector defined by a normal. */
            public static Reflect ($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
            * @param inDirection The input direction.
            * @returns The perpendicular direction. 
            */
            public static Perpendicular ($inDirection: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Dot Product of two vectors. */
            public static Dot ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : number
            /** Returns the unsigned angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            */
            public static Angle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Returns the signed angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            */
            public static SignedAngle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Returns the distance between a and b. */
            public static Distance ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength. */
            public static ClampMagnitude ($vector: UnityEngine.Vector2, $maxLength: number) : UnityEngine.Vector2
            public static SqrMagnitude ($a: UnityEngine.Vector2) : number
            public SqrMagnitude () : number
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector2
            public static op_Addition ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Subtraction ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_UnaryNegation ($a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Multiply ($d: number, $a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Equality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector2
            public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector3
            public constructor ($x: number, $y: number)
        }
        /** Representation of 3D vectors and points. */
        class Vector3 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector3>, System.IFormattable
        {
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number/** X component of the vector. */
            public x : number/** Y component of the vector. */
            public y : number/** Z component of the vector. */
            public z : number/** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector3;
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector3(0, 0, 0). */
            public static get zero(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 1, 1). */
            public static get one(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, 1). */
            public static get forward(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, -1). */
            public static get back(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 1, 0). */
            public static get up(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, -1, 0). */
            public static get down(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(-1, 0, 0). */
            public static get left(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 0, 0). */
            public static get right(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector3;
            /** Spherically interpolates between two vectors. */
            public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Spherically interpolates between two vectors. */
            public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Makes vectors normalized and orthogonal to each other. */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
            /** Makes vectors normalized and orthogonal to each other. */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
            /** Rotates a vector current towards target.
            * @param current The vector being managed.
            * @param target The vector.
            * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
            * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
            * @returns The location that RotateTowards generates. 
            */
            public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
            /** Linearly interpolates between two points.
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Value used to interpolate between a and b.
            * @returns Interpolated value, equals to a + (b - a) * t. 
            */
            public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Linearly interpolates between two vectors. */
            public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
            * @param current The position to move from.
            * @param target The position to move towards.
            * @param maxDistanceDelta Distance to move current per call.
            * @returns The new position. 
            */
            public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y and z components of an existing Vector3. */
            public Set ($newX: number, $newY: number, $newZ: number) : void
            /** Multiplies two vectors component-wise. */
            public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale ($scale: UnityEngine.Vector3) : void
            /** Cross Product of two vectors. */
            public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector3) : boolean
            /** Reflects a vector off the plane defined by a normal. */
            public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Makes this vector have a magnitude of 1. */
            public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
            public Normalize () : void
            /** Dot Product of two vectors. */
            public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
            /** Projects a vector onto another vector. */
            public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
            * @param planeNormal The direction from the vector towards the plane.
            * @param vector The location of the vector above the plane.
            * @returns The location of the vector on the plane. 
            */
            public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns the angle in degrees between from and to.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
            /** Returns the signed angle in degrees between from and to. * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @param axis A vector around which the other vectors are rotated.
            */
            public static SignedAngle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3) : number
            /** Returns the distance between a and b. */
            public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength. */
            public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
            public static Magnitude ($vector: UnityEngine.Vector3) : number
            public static SqrMagnitude ($vector: UnityEngine.Vector3) : number
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public ToString () : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $y: number)
        }
        /** Representation of four-dimensional vectors. */
        class Vector4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector4>, System.IFormattable
        {
            public static kEpsilon : number/** X component of the vector. */
            public x : number/** Y component of the vector. */
            public y : number/** Z component of the vector. */
            public z : number/** W component of the vector. */
            public w : number/** Returns this vector with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Vector4;
            /** Returns the length of this vector (Read Only). */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only). */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector4(0,0,0,0). */
            public static get zero(): UnityEngine.Vector4;
            /** Shorthand for writing Vector4(1,1,1,1). */
            public static get one(): UnityEngine.Vector4;
            /** Shorthand for writing Vector4(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity). */
            public static get positiveInfinity(): UnityEngine.Vector4;
            /** Shorthand for writing Vector4(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity). */
            public static get negativeInfinity(): UnityEngine.Vector4;
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y, z and w components of an existing Vector4. */
            public Set ($newX: number, $newY: number, $newZ: number, $newW: number) : void
            /** Linearly interpolates between two vectors. */
            public static Lerp ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4, $t: number) : UnityEngine.Vector4
            /** Linearly interpolates between two vectors. */
            public static LerpUnclamped ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4, $t: number) : UnityEngine.Vector4
            /** Moves a point current towards target. */
            public static MoveTowards ($current: UnityEngine.Vector4, $target: UnityEngine.Vector4, $maxDistanceDelta: number) : UnityEngine.Vector4
            /** Multiplies two vectors component-wise. */
            public static Scale ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            /** Multiplies every component of this vector by the same component of scale. */
            public Scale ($scale: UnityEngine.Vector4) : void
            /** Returns true if the given vector is exactly equal to this vector. */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector4) : boolean
            public static Normalize ($a: UnityEngine.Vector4) : UnityEngine.Vector4
            public Normalize () : void
            /** Dot Product of two vectors. */
            public static Dot ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : number
            /** Projects a vector onto another vector. */
            public static Project ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            /** Returns the distance between a and b. */
            public static Distance ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : number
            public static Magnitude ($a: UnityEngine.Vector4) : number
            /** Returns a vector that is made from the smallest components of two vectors. */
            public static Min ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : UnityEngine.Vector4
            /** Returns a vector that is made from the largest components of two vectors. */
            public static Max ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Addition ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Subtraction ($a: UnityEngine.Vector4, $b: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_UnaryNegation ($a: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Multiply ($a: UnityEngine.Vector4, $d: number) : UnityEngine.Vector4
            public static op_Multiply ($d: number, $a: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Division ($a: UnityEngine.Vector4, $d: number) : UnityEngine.Vector4
            public static op_Equality ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector4, $rhs: UnityEngine.Vector4) : boolean
            public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector4
            public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Vector3
            public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector4
            public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Vector2
            public ToString () : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public static SqrMagnitude ($a: UnityEngine.Vector4) : number
            public SqrMagnitude () : number
            public constructor ($x: number, $y: number, $z: number, $w: number)
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $y: number)
        }
        /** Quaternions are used to represent rotations. */
        class Quaternion extends System.ValueType implements System.IEquatable$1<UnityEngine.Quaternion>, System.IFormattable
        {
        /** X component of the Quaternion. Don't modify this directly unless you know quaternions inside out. */
            public x : number/** Y component of the Quaternion. Don't modify this directly unless you know quaternions inside out. */
            public y : number/** Z component of the Quaternion. Don't modify this directly unless you know quaternions inside out. */
            public z : number/** W component of the Quaternion. Do not directly modify quaternions. */
            public w : number
            public static kEpsilon : number/** The identity rotation (Read Only). */
            public static get identity(): UnityEngine.Quaternion;
            /** Returns or sets the euler angle representation of the rotation. */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** Returns this quaternion with a magnitude of 1 (Read Only). */
            public get normalized(): UnityEngine.Quaternion;
            /** Creates a rotation which rotates from fromDirection to toDirection. */
            public static FromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Returns the Inverse of rotation. */
            public static Inverse ($rotation: UnityEngine.Quaternion) : UnityEngine.Quaternion
            /** Spherically interpolates between quaternions a and b by ratio t. The parameter t is clamped to the range [0, 1].
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Interpolation ratio.
            * @returns A quaternion spherically interpolated between quaternions a and b. 
            */
            public static Slerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Spherically interpolates between a and b by t. The parameter t is not clamped. */
            public static SlerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is clamped to the range [0, 1]. */
            public static Lerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is not clamped. */
            public static LerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Creates a rotation which rotates angle degrees around axis. */
            public static AngleAxis ($angle: number, $axis: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Creates a rotation with the specified forward and upwards directions. * @param forward The direction to look in.
            * @param upwards The vector that defines in which direction up is.
            */
            public static LookRotation ($forward: UnityEngine.Vector3, $upwards: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Creates a rotation with the specified forward and upwards directions. * @param forward The direction to look in.
            * @param upwards The vector that defines in which direction up is.
            */
            public static LookRotation ($forward: UnityEngine.Vector3) : UnityEngine.Quaternion
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y, z and w components of an existing Quaternion. */
            public Set ($newX: number, $newY: number, $newZ: number, $newW: number) : void
            public static op_Multiply ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : UnityEngine.Quaternion
            public static op_Multiply ($rotation: UnityEngine.Quaternion, $point: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
            public static op_Inequality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
            /** The dot product between two rotations. */
            public static Dot ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
            /** Creates a rotation with the specified forward and upwards directions. * @param view The direction to look in.
            * @param up The vector that defines in which direction up is.
            */
            public SetLookRotation ($view: UnityEngine.Vector3) : void
            /** Creates a rotation with the specified forward and upwards directions. * @param view The direction to look in.
            * @param up The vector that defines in which direction up is.
            */
            public SetLookRotation ($view: UnityEngine.Vector3, $up: UnityEngine.Vector3) : void
            /** Returns the angle in degrees between two rotations a and b. */
            public static Angle ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
            /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis; applied in that order. */
            public static Euler ($x: number, $y: number, $z: number) : UnityEngine.Quaternion
            /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis. */
            public static Euler ($euler: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Converts a rotation to angle-axis representation (angles in degrees). */
            public ToAngleAxis ($angle: $Ref<number>, $axis: $Ref<UnityEngine.Vector3>) : void
            /** Creates a rotation which rotates from fromDirection to toDirection. */
            public SetFromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : void
            /** Rotates a rotation from towards to. */
            public static RotateTowards ($from: UnityEngine.Quaternion, $to: UnityEngine.Quaternion, $maxDegreesDelta: number) : UnityEngine.Quaternion
            /** Converts this quaternion to one with the same orientation but with a magnitude of 1. */
            public static Normalize ($q: UnityEngine.Quaternion) : UnityEngine.Quaternion
            public Normalize () : void
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Quaternion) : boolean
            public ToString () : string
            /** Returns a formatted string of the Quaternion. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string of the Quaternion. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number, $w: number)
        }
        /** Representation of RGBA colors. */
        class Color extends System.ValueType implements System.IEquatable$1<UnityEngine.Color>, System.IFormattable
        {
        /** Red component of the color. */
            public r : number/** Green component of the color. */
            public g : number/** Blue component of the color. */
            public b : number/** Alpha component of the color (0 is transparent, 1 is opaque). */
            public a : number/** Solid red. RGBA is (1, 0, 0, 1). */
            public static get red(): UnityEngine.Color;
            /** Solid green. RGBA is (0, 1, 0, 1). */
            public static get green(): UnityEngine.Color;
            /** Solid blue. RGBA is (0, 0, 1, 1). */
            public static get blue(): UnityEngine.Color;
            /** Solid white. RGBA is (1, 1, 1, 1). */
            public static get white(): UnityEngine.Color;
            /** Solid black. RGBA is (0, 0, 0, 1). */
            public static get black(): UnityEngine.Color;
            /** Yellow. RGBA is (1, 0.92, 0.016, 1), but the color is nice to look at! */
            public static get yellow(): UnityEngine.Color;
            /** Cyan. RGBA is (0, 1, 1, 1). */
            public static get cyan(): UnityEngine.Color;
            /** Magenta. RGBA is (1, 0, 1, 1). */
            public static get magenta(): UnityEngine.Color;
            /** Gray. RGBA is (0.5, 0.5, 0.5, 1). */
            public static get gray(): UnityEngine.Color;
            /** English spelling for gray. RGBA is the same (0.5, 0.5, 0.5, 1). */
            public static get grey(): UnityEngine.Color;
            /** Completely transparent. RGBA is (0, 0, 0, 0). */
            public static get clear(): UnityEngine.Color;
            /** The grayscale value of the color. (Read Only) */
            public get grayscale(): number;
            /** A linear value of an sRGB color. */
            public get linear(): UnityEngine.Color;
            /** A version of the color that has had the gamma curve applied. */
            public get gamma(): UnityEngine.Color;
            /** Returns the maximum color component value: Max(r,g,b). */
            public get maxColorComponent(): number;
            public ToString () : string
            /** Returns a formatted string of this color. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string of this color. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Color) : boolean
            public static op_Addition ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Subtraction ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Multiply ($a: UnityEngine.Color, $b: UnityEngine.Color) : UnityEngine.Color
            public static op_Multiply ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
            public static op_Multiply ($b: number, $a: UnityEngine.Color) : UnityEngine.Color
            public static op_Division ($a: UnityEngine.Color, $b: number) : UnityEngine.Color
            public static op_Equality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
            public static op_Inequality ($lhs: UnityEngine.Color, $rhs: UnityEngine.Color) : boolean
            /** Linearly interpolates between colors a and b by t. * @param a Color a.
            * @param b Color b.
            * @param t Float for combining a and b.
            */
            public static Lerp ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
            /** Linearly interpolates between colors a and b by t. */
            public static LerpUnclamped ($a: UnityEngine.Color, $b: UnityEngine.Color, $t: number) : UnityEngine.Color
            public static op_Implicit ($c: UnityEngine.Color) : UnityEngine.Vector4
            public static op_Implicit ($v: UnityEngine.Vector4) : UnityEngine.Color
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Calculates the hue, saturation and value of an RGB input color. * @param rgbColor An input color.
            * @param H Output variable for hue.
            * @param S Output variable for saturation.
            * @param V Output variable for value.
            */
            public static RGBToHSV ($rgbColor: UnityEngine.Color, $H: $Ref<number>, $S: $Ref<number>, $V: $Ref<number>) : void
            /** Creates an RGB colour from HSV input.
            * @param H Hue [0..1].
            * @param S Saturation [0..1].
            * @param V Brightness value [0..1].
            * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
            * @returns An opaque colour with HSV matching the input. 
            */
            public static HSVToRGB ($H: number, $S: number, $V: number) : UnityEngine.Color
            /** Creates an RGB colour from HSV input.
            * @param H Hue [0..1].
            * @param S Saturation [0..1].
            * @param V Brightness value [0..1].
            * @param hdr Output HDR colours. If true, the returned colour will not be clamped to [0..1].
            * @returns An opaque colour with HSV matching the input. 
            */
            public static HSVToRGB ($H: number, $S: number, $V: number, $hdr: boolean) : UnityEngine.Color
            public constructor ($r: number, $g: number, $b: number, $a: number)
            public constructor ($r: number, $g: number, $b: number)
        }
        /** A 2D Rectangle defined by X and Y position, width and height. */
        class Rect extends System.ValueType implements System.IEquatable$1<UnityEngine.Rect>, System.IFormattable
        {
        /** Shorthand for writing new Rect(0,0,0,0). */
            public static get zero(): UnityEngine.Rect;
            /** The X coordinate of the rectangle. */
            public get x(): number;
            public set x(value: number);
            /** The Y coordinate of the rectangle. */
            public get y(): number;
            public set y(value: number);
            /** The X and Y position of the rectangle. */
            public get position(): UnityEngine.Vector2;
            public set position(value: UnityEngine.Vector2);
            /** The position of the center of the rectangle. */
            public get center(): UnityEngine.Vector2;
            public set center(value: UnityEngine.Vector2);
            /** The position of the minimum corner of the rectangle. */
            public get min(): UnityEngine.Vector2;
            public set min(value: UnityEngine.Vector2);
            /** The position of the maximum corner of the rectangle. */
            public get max(): UnityEngine.Vector2;
            public set max(value: UnityEngine.Vector2);
            /** The width of the rectangle, measured from the X position. */
            public get width(): number;
            public set width(value: number);
            /** The height of the rectangle, measured from the Y position. */
            public get height(): number;
            public set height(value: number);
            /** The width and height of the rectangle. */
            public get size(): UnityEngine.Vector2;
            public set size(value: UnityEngine.Vector2);
            /** The minimum X coordinate of the rectangle. */
            public get xMin(): number;
            public set xMin(value: number);
            /** The minimum Y coordinate of the rectangle. */
            public get yMin(): number;
            public set yMin(value: number);
            /** The maximum X coordinate of the rectangle. */
            public get xMax(): number;
            public set xMax(value: number);
            /** The maximum Y coordinate of the rectangle. */
            public get yMax(): number;
            public set yMax(value: number);
            /** Creates a rectangle from min/max coordinate values.
            * @param xmin The minimum X coordinate.
            * @param ymin The minimum Y coordinate.
            * @param xmax The maximum X coordinate.
            * @param ymax The maximum Y coordinate.
            * @returns A rectangle matching the specified coordinates. 
            */
            public static MinMaxRect ($xmin: number, $ymin: number, $xmax: number, $ymax: number) : UnityEngine.Rect
            /** Set components of an existing Rect. */
            public Set ($x: number, $y: number, $width: number, $height: number) : void
            /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param point Point to test.
            * @param allowInverse Does the test allow the Rect's width and height to be negative?
            * @returns True if the point lies within the specified rectangle. 
            */
            public Contains ($point: UnityEngine.Vector2) : boolean
            /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param point Point to test.
            * @param allowInverse Does the test allow the Rect's width and height to be negative?
            * @returns True if the point lies within the specified rectangle. 
            */
            public Contains ($point: UnityEngine.Vector3) : boolean
            /** Returns true if the x and y components of point is a point inside this rectangle. If allowInverse is present and true, the width and height of the Rect are allowed to take negative values (ie, the min value is greater than the max), and the test will still work.
            * @param point Point to test.
            * @param allowInverse Does the test allow the Rect's width and height to be negative?
            * @returns True if the point lies within the specified rectangle. 
            */
            public Contains ($point: UnityEngine.Vector3, $allowInverse: boolean) : boolean
            /** Returns true if the other rectangle overlaps this one. If allowInverse is present and true, the widths and heights of the Rects are allowed to take negative values (ie, the min value is greater than the max), and the test will still work. * @param other Other rectangle to test overlapping with.
            * @param allowInverse Does the test allow the widths and heights of the Rects to be negative?
            */
            public Overlaps ($other: UnityEngine.Rect) : boolean
            /** Returns true if the other rectangle overlaps this one. If allowInverse is present and true, the widths and heights of the Rects are allowed to take negative values (ie, the min value is greater than the max), and the test will still work. * @param other Other rectangle to test overlapping with.
            * @param allowInverse Does the test allow the widths and heights of the Rects to be negative?
            */
            public Overlaps ($other: UnityEngine.Rect, $allowInverse: boolean) : boolean
            /** Returns a point inside a rectangle, given normalized coordinates. * @param rectangle Rectangle to get a point inside.
            * @param normalizedRectCoordinates Normalized coordinates to get a point for.
            */
            public static NormalizedToPoint ($rectangle: UnityEngine.Rect, $normalizedRectCoordinates: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns the normalized coordinates cooresponding the the point. * @param rectangle Rectangle to get normalized coordinates inside.
            * @param point A point inside the rectangle to get normalized coordinates for.
            */
            public static PointToNormalized ($rectangle: UnityEngine.Rect, $point: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Inequality ($lhs: UnityEngine.Rect, $rhs: UnityEngine.Rect) : boolean
            public static op_Equality ($lhs: UnityEngine.Rect, $rhs: UnityEngine.Rect) : boolean
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Rect) : boolean
            public ToString () : string
            /** Returns a formatted string for this Rect. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this Rect. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $width: number, $height: number)
            public constructor ($position: UnityEngine.Vector2, $size: UnityEngine.Vector2)
            public constructor ($source: UnityEngine.Rect)
        }
        /** Represents an axis aligned bounding box. */
        class Bounds extends System.ValueType implements System.IEquatable$1<UnityEngine.Bounds>, System.IFormattable
        {
        /** The center of the bounding box. */
            public get center(): UnityEngine.Vector3;
            public set center(value: UnityEngine.Vector3);
            /** The total size of the box. This is always twice as large as the extents. */
            public get size(): UnityEngine.Vector3;
            public set size(value: UnityEngine.Vector3);
            /** The extents of the Bounding Box. This is always half of the size of the Bounds. */
            public get extents(): UnityEngine.Vector3;
            public set extents(value: UnityEngine.Vector3);
            /** The minimal point of the box. This is always equal to center-extents. */
            public get min(): UnityEngine.Vector3;
            public set min(value: UnityEngine.Vector3);
            /** The maximal point of the box. This is always equal to center+extents. */
            public get max(): UnityEngine.Vector3;
            public set max(value: UnityEngine.Vector3);
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Bounds) : boolean
            public static op_Equality ($lhs: UnityEngine.Bounds, $rhs: UnityEngine.Bounds) : boolean
            public static op_Inequality ($lhs: UnityEngine.Bounds, $rhs: UnityEngine.Bounds) : boolean
            /** Sets the bounds to the min and max value of the box. */
            public SetMinMax ($min: UnityEngine.Vector3, $max: UnityEngine.Vector3) : void
            /** Grows the Bounds to include the point. */
            public Encapsulate ($point: UnityEngine.Vector3) : void
            /** Grow the bounds to encapsulate the bounds. */
            public Encapsulate ($bounds: UnityEngine.Bounds) : void
            /** Expand the bounds by increasing its size by amount along each side. */
            public Expand ($amount: number) : void
            /** Expand the bounds by increasing its size by amount along each side. */
            public Expand ($amount: UnityEngine.Vector3) : void
            /** Does another bounding box intersect with this bounding box? */
            public Intersects ($bounds: UnityEngine.Bounds) : boolean
            /** Does ray intersect this bounding box? */
            public IntersectRay ($ray: UnityEngine.Ray) : boolean
            /** Does ray intersect this bounding box? */
            public IntersectRay ($ray: UnityEngine.Ray, $distance: $Ref<number>) : boolean
            public ToString () : string
            /** Returns a formatted string for the bounds. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for the bounds. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            /** Is point contained in the bounding box? */
            public Contains ($point: UnityEngine.Vector3) : boolean
            /** The smallest squared distance between the point and this bounding box. */
            public SqrDistance ($point: UnityEngine.Vector3) : number
            /** The closest point on the bounding box.
            * @param point Arbitrary point.
            * @returns The point on the bounding box or inside the bounding box. 
            */
            public ClosestPoint ($point: UnityEngine.Vector3) : UnityEngine.Vector3
            public constructor ($center: UnityEngine.Vector3, $size: UnityEngine.Vector3)
        }
        /** Representation of rays. */
        class Ray extends System.ValueType implements System.IFormattable
        {
        /** The origin point of the ray. */
            public get origin(): UnityEngine.Vector3;
            public set origin(value: UnityEngine.Vector3);
            /** The direction of the ray. */
            public get direction(): UnityEngine.Vector3;
            public set direction(value: UnityEngine.Vector3);
            /** Returns a point at distance units along the ray. */
            public GetPoint ($distance: number) : UnityEngine.Vector3
            public ToString () : string
            /** Returns a formatted string for this ray. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this ray. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3)
        }
        /** Structure used to get information back from a raycast. */
        class RaycastHit extends System.ValueType
        {
        /** The Collider that was hit. */
            public get collider(): UnityEngine.Collider;
            /** The impact point in world space where the ray hit the collider. */
            public get point(): UnityEngine.Vector3;
            public set point(value: UnityEngine.Vector3);
            /** The normal of the surface the ray hit. */
            public get normal(): UnityEngine.Vector3;
            public set normal(value: UnityEngine.Vector3);
            /** The barycentric coordinate of the triangle we hit. */
            public get barycentricCoordinate(): UnityEngine.Vector3;
            public set barycentricCoordinate(value: UnityEngine.Vector3);
            /** The distance from the ray's origin to the impact point. */
            public get distance(): number;
            public set distance(value: number);
            /** The index of the triangle that was hit. */
            public get triangleIndex(): number;
            /** The uv texture coordinate at the collision location. */
            public get textureCoord(): UnityEngine.Vector2;
            /** The secondary uv texture coordinate at the impact point. */
            public get textureCoord2(): UnityEngine.Vector2;
            /** The Transform of the rigidbody or collider that was hit. */
            public get transform(): UnityEngine.Transform;
            /** The Rigidbody of the collider that was hit. If the collider is not attached to a rigidbody then it is null. */
            public get rigidbody(): UnityEngine.Rigidbody;
            /** The ArticulationBody of the collider that was hit. If the collider is not attached to an articulation body then it is null. */
            public get articulationBody(): UnityEngine.ArticulationBody;
            /** The uv lightmap coordinate at the impact point. */
            public get lightmapCoord(): UnityEngine.Vector2;
        }
        /** A base class of all colliders. */
        class Collider extends UnityEngine.Component
        {
        /** Enabled Colliders will collide with other Colliders, disabled Colliders won't. */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** The rigidbody the collider is attached to. */
            public get attachedRigidbody(): UnityEngine.Rigidbody;
            /** The articulation body the collider is attached to. */
            public get attachedArticulationBody(): UnityEngine.ArticulationBody;
            /** Is the collider a trigger? */
            public get isTrigger(): boolean;
            public set isTrigger(value: boolean);
            /** Contact offset value of this collider. */
            public get contactOffset(): number;
            public set contactOffset(value: number);
            /** The world space bounding volume of the collider (Read Only). */
            public get bounds(): UnityEngine.Bounds;
            /** The shared physic material of this collider. */
            public get sharedMaterial(): UnityEngine.PhysicMaterial;
            public set sharedMaterial(value: UnityEngine.PhysicMaterial);
            /** The material used by the collider. */
            public get material(): UnityEngine.PhysicMaterial;
            public set material(value: UnityEngine.PhysicMaterial);
            /** Returns a point on the collider that is closest to a given location.
            * @param position Location you want to find the closest point to.
            * @returns The point on the collider that is closest to the specified location. 
            */
            public ClosestPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Casts a Ray that ignores all Colliders except this one.
            * @param ray The starting point and direction of the ray.
            * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit.
            * @param maxDistance The max length of the ray.
            * @returns True when the ray intersects the collider, otherwise false. 
            */
            public Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            /** The closest point to the bounding box of the attached collider. */
            public ClosestPointOnBounds ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            public constructor ()
        }
        /** Base class for everything attached to GameObjects. */
        class Component extends UnityEngine.Object
        {
        /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            /** The game object this component is attached to. A component is always attached to a game object. */
            public get gameObject(): UnityEngine.GameObject;
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Returns the component of Type type if the GameObject has one attached, null if it doesn't. Will also return disabled components. * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** Gets the component of the specified type, if it exists.
            * @param type The type of the component to retrieve.
            * @param component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** Returns the component with name type if the GameObject has one attached, null if it doesn't. */
            public GetComponent ($type: string) : UnityEngine.Component
            public GetComponentInChildren ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param t The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($t: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject or any of its children. Works recursively. * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set? includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless. Default is false.
            */
            public GetComponentsInChildren ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInChildren ($t: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns the component of Type type in the GameObject or any of its parents.
            * @param t The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInParent ($t: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject or any of its parents. * @param t The type of Component to retrieve.
            * @param includeInactive Should inactive Components be included in the found set?
            */
            public GetComponentsInParent ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($t: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject. * @param type The type of Component to retrieve.
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
            */
            public CompareTag ($tag: string) : boolean
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public constructor ()
        }
        /** Base class for all objects Unity can reference. */
        class Object extends System.Object
        {
        /** The name of the object. */
            public get name(): string;
            public set name(value: string);
            /** Should the object be hidden, saved with the Scene or modifiable by the user? */
            public get hideFlags(): UnityEngine.HideFlags;
            public set hideFlags(value: UnityEngine.HideFlags);
            public GetInstanceID () : number
            public static op_Implicit ($exists: UnityEngine.Object) : boolean
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean) : UnityEngine.Object
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
            * @param t The optional amount of time to delay before destroying the object.
            */
            public static Destroy ($obj: UnityEngine.Object, $t: number) : void
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
            * @param t The optional amount of time to delay before destroying the object.
            */
            public static Destroy ($obj: UnityEngine.Object) : void
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
            * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
            */
            public static DestroyImmediate ($obj: UnityEngine.Object, $allowDestroyingAssets: boolean) : void
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
            * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
            */
            public static DestroyImmediate ($obj: UnityEngine.Object) : void
            /** Gets a list of all loaded objects of Type type.
            * @param type The type of object to find.
            * @param includeInactive If true, components attached to inactive GameObjects are also included.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsOfType ($type: System.Type) : System.Array$1<UnityEngine.Object>
            /** Gets a list of all loaded objects of Type type.
            * @param type The type of object to find.
            * @param includeInactive If true, components attached to inactive GameObjects are also included.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsOfType ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Object>
            /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
            */
            public static DontDestroyOnLoad ($target: UnityEngine.Object) : void
            /** Returns the first active loaded object of Type type.
            * @param type The type of object to find.
            * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
            */
            public static FindObjectOfType ($type: System.Type) : UnityEngine.Object
            /** Returns the first active loaded object of Type type.
            * @param type The type of object to find.
            * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
            */
            public static FindObjectOfType ($type: System.Type, $includeInactive: boolean) : UnityEngine.Object
            public static op_Equality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
            public static op_Inequality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
            public constructor ()
        }
        /** Position, rotation and scale of an object. */
        class Transform extends UnityEngine.Component implements System.Collections.IEnumerable
        {
        /** The world space position of the Transform. */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform. */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees. */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation. */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space. */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space. */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space. */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space. */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent. */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent. */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform. */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only). */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms a point from local space into world space (Read Only). */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Returns the topmost transform in the hierarchy. */
            public get root(): UnityEngine.Transform;
            /** The number of children the parent Transform has. */
            public get childCount(): number;
            /** The global scale of the object (Read Only). */
            public get lossyScale(): UnityEngine.Vector3;
            /** Has the transform changed since the last time the flag was set to 'false'? */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure. */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure. */
            public get hierarchyCount(): number;
            /** Set the parent of the transform. * @param parent The parent Transform to use.
            * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($p: UnityEngine.Transform) : void
            /** Set the parent of the transform. * @param parent The parent Transform to use.
            * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($parent: UnityEngine.Transform, $worldPositionStays: boolean) : void
            /** Sets the world space position and rotation of the Transform component. */
            public SetPositionAndRotation ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
            /** Moves the transform in the direction and distance of translation. */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform in the direction and distance of translation. */
            public Translate ($translation: UnityEngine.Vector3) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate ($x: number, $y: number, $z: number) : void
            /** Moves the transform in the direction and distance of translation. */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
            * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
            */
            public Rotate ($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
            */
            public Rotate ($eulers: UnityEngine.Vector3) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            * @param xAngle Degrees to rotate the GameObject around the X axis.
            * @param yAngle Degrees to rotate the GameObject around the Y axis.
            * @param zAngle Degrees to rotate the GameObject around the Z axis.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param xAngle Degrees to rotate the GameObject around the X axis.
            * @param yAngle Degrees to rotate the GameObject around the Y axis.
            * @param zAngle Degrees to rotate the GameObject around the Z axis.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
            * @param axis The axis to apply rotation to.
            * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param axis The axis to apply rotation to.
            * @param angle The degrees of rotation to apply.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees. */
            public RotateAround ($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform) : void
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3) : void
            /** Transforms direction from local space to world space. */
            public TransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms direction x, y, z from local space to world space. */
            public TransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms vector from local space to world space. */
            public TransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms vector x, y, z from local space to world space. */
            public TransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from local space to world space. */
            public TransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from local space to world space. */
            public TransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from world space to local space. */
            public InverseTransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint. */
            public InverseTransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            public DetachChildren () : void
            public SetAsFirstSibling () : void
            public SetAsLastSibling () : void
            /** Sets the sibling index. * @param index Index to set.
            */
            public SetSiblingIndex ($index: number) : void
            public GetSiblingIndex () : number
            /** Finds a child by n and returns it.
            * @param n Name of child to be found.
            * @returns The returned child transform or null if no child is found. 
            */
            public Find ($n: string) : UnityEngine.Transform
            /** Is this transform a child of parent? */
            public IsChildOf ($parent: UnityEngine.Transform) : boolean
            public GetEnumerator () : System.Collections.IEnumerator
            /** Returns a transform child by index.
            * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
            * @returns Transform child by index. 
            */
            public GetChild ($index: number) : UnityEngine.Transform
        }
        /** Control of an object's position through physics simulation. */
        class Rigidbody extends UnityEngine.Component
        {
        /** The velocity vector of the rigidbody. It represents the rate of change of Rigidbody position. */
            public get velocity(): UnityEngine.Vector3;
            public set velocity(value: UnityEngine.Vector3);
            /** The angular velocity vector of the rigidbody measured in radians per second. */
            public get angularVelocity(): UnityEngine.Vector3;
            public set angularVelocity(value: UnityEngine.Vector3);
            /** The drag of the object. */
            public get drag(): number;
            public set drag(value: number);
            /** The angular drag of the object. */
            public get angularDrag(): number;
            public set angularDrag(value: number);
            /** The mass of the rigidbody. */
            public get mass(): number;
            public set mass(value: number);
            /** Controls whether gravity affects this rigidbody. */
            public get useGravity(): boolean;
            public set useGravity(value: boolean);
            /** Maximum velocity of a rigidbody when moving out of penetrating state. */
            public get maxDepenetrationVelocity(): number;
            public set maxDepenetrationVelocity(value: number);
            /** Controls whether physics affects the rigidbody. */
            public get isKinematic(): boolean;
            public set isKinematic(value: boolean);
            /** Controls whether physics will change the rotation of the object. */
            public get freezeRotation(): boolean;
            public set freezeRotation(value: boolean);
            /** Controls which degrees of freedom are allowed for the simulation of this Rigidbody. */
            public get constraints(): UnityEngine.RigidbodyConstraints;
            public set constraints(value: UnityEngine.RigidbodyConstraints);
            /** The Rigidbody's collision detection mode. */
            public get collisionDetectionMode(): UnityEngine.CollisionDetectionMode;
            public set collisionDetectionMode(value: UnityEngine.CollisionDetectionMode);
            /** The center of mass relative to the transform's origin. */
            public get centerOfMass(): UnityEngine.Vector3;
            public set centerOfMass(value: UnityEngine.Vector3);
            /** The center of mass of the rigidbody in world space (Read Only). */
            public get worldCenterOfMass(): UnityEngine.Vector3;
            /** The rotation of the inertia tensor. */
            public get inertiaTensorRotation(): UnityEngine.Quaternion;
            public set inertiaTensorRotation(value: UnityEngine.Quaternion);
            /** The diagonal inertia tensor of mass relative to the center of mass. */
            public get inertiaTensor(): UnityEngine.Vector3;
            public set inertiaTensor(value: UnityEngine.Vector3);
            /** Should collision detection be enabled? (By default always enabled). */
            public get detectCollisions(): boolean;
            public set detectCollisions(value: boolean);
            /** The position of the rigidbody. */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** The rotation of the Rigidbody. */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** Interpolation allows you to smooth out the effect of running physics at a fixed frame rate. */
            public get interpolation(): UnityEngine.RigidbodyInterpolation;
            public set interpolation(value: UnityEngine.RigidbodyInterpolation);
            /** The solverIterations determines how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverIterations. Must be positive. */
            public get solverIterations(): number;
            public set solverIterations(value: number);
            /** The mass-normalized energy threshold, below which objects start going to sleep. */
            public get sleepThreshold(): number;
            public set sleepThreshold(value: number);
            /** The maximimum angular velocity of the rigidbody measured in radians per second. (Default 7) range { 0, infinity }. */
            public get maxAngularVelocity(): number;
            public set maxAngularVelocity(value: number);
            /** The solverVelocityIterations affects how how accurately Rigidbody joints and collision contacts are resolved. Overrides Physics.defaultSolverVelocityIterations. Must be positive. */
            public get solverVelocityIterations(): number;
            public set solverVelocityIterations(value: number);
            /** Sets the mass based on the attached colliders assuming a constant density. */
            public SetDensity ($density: number) : void
            /** Moves the kinematic Rigidbody towards position. * @param position Provides the new position for the Rigidbody object.
            */
            public MovePosition ($position: UnityEngine.Vector3) : void
            /** Rotates the rigidbody to rotation. * @param rot The new rotation for the Rigidbody.
            */
            public MoveRotation ($rot: UnityEngine.Quaternion) : void
            public Sleep () : void
            public IsSleeping () : boolean
            public WakeUp () : void
            public ResetCenterOfMass () : void
            public ResetInertiaTensor () : void
            /** The velocity relative to the rigidbody at the point relativePoint. */
            public GetRelativePointVelocity ($relativePoint: UnityEngine.Vector3) : UnityEngine.Vector3
            /** The velocity of the rigidbody at the point worldPoint in global space. */
            public GetPointVelocity ($worldPoint: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Adds a force to the Rigidbody. * @param force Force vector in world coordinates.
            * @param mode Type of force to apply.
            */
            public AddForce ($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the Rigidbody. * @param force Force vector in world coordinates.
            * @param mode Type of force to apply.
            */
            public AddForce ($force: UnityEngine.Vector3) : void
            /** Adds a force to the Rigidbody. * @param x Size of force along the world x-axis.
            * @param y Size of force along the world y-axis.
            * @param z Size of force along the world z-axis.
            * @param mode Type of force to apply.
            */
            public AddForce ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the Rigidbody. * @param x Size of force along the world x-axis.
            * @param y Size of force along the world y-axis.
            * @param z Size of force along the world z-axis.
            * @param mode Type of force to apply.
            */
            public AddForce ($x: number, $y: number, $z: number) : void
            /** Adds a force to the rigidbody relative to its coordinate system. * @param force Force vector in local coordinates.
            * @param mode Type of force to apply.
            */
            public AddRelativeForce ($force: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the rigidbody relative to its coordinate system. * @param force Force vector in local coordinates.
            * @param mode Type of force to apply.
            */
            public AddRelativeForce ($force: UnityEngine.Vector3) : void
            /** Adds a force to the rigidbody relative to its coordinate system. * @param x Size of force along the local x-axis.
            * @param y Size of force along the local y-axis.
            * @param z Size of force along the local z-axis.
            * @param mode Type of force to apply.
            */
            public AddRelativeForce ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a force to the rigidbody relative to its coordinate system. * @param x Size of force along the local x-axis.
            * @param y Size of force along the local y-axis.
            * @param z Size of force along the local z-axis.
            * @param mode Type of force to apply.
            */
            public AddRelativeForce ($x: number, $y: number, $z: number) : void
            /** Adds a torque to the rigidbody. * @param torque Torque vector in world coordinates.
            * @param mode Type of torque to apply.
            */
            public AddTorque ($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody. * @param torque Torque vector in world coordinates.
            * @param mode Type of torque to apply.
            */
            public AddTorque ($torque: UnityEngine.Vector3) : void
            /** Adds a torque to the rigidbody. * @param x Size of torque along the world x-axis.
            * @param y Size of torque along the world y-axis.
            * @param z Size of torque along the world z-axis.
            * @param mode Type of torque to apply.
            */
            public AddTorque ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody. * @param x Size of torque along the world x-axis.
            * @param y Size of torque along the world y-axis.
            * @param z Size of torque along the world z-axis.
            * @param mode Type of torque to apply.
            */
            public AddTorque ($x: number, $y: number, $z: number) : void
            /** Adds a torque to the rigidbody relative to its coordinate system. * @param torque Torque vector in local coordinates.
            * @param mode Type of torque to apply.
            */
            public AddRelativeTorque ($torque: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody relative to its coordinate system. * @param torque Torque vector in local coordinates.
            * @param mode Type of torque to apply.
            */
            public AddRelativeTorque ($torque: UnityEngine.Vector3) : void
            /** Adds a torque to the rigidbody relative to its coordinate system. * @param x Size of torque along the local x-axis.
            * @param y Size of torque along the local y-axis.
            * @param z Size of torque along the local z-axis.
            * @param mode Type of torque to apply.
            */
            public AddRelativeTorque ($x: number, $y: number, $z: number, $mode: UnityEngine.ForceMode) : void
            /** Adds a torque to the rigidbody relative to its coordinate system. * @param x Size of torque along the local x-axis.
            * @param y Size of torque along the local y-axis.
            * @param z Size of torque along the local z-axis.
            * @param mode Type of torque to apply.
            */
            public AddRelativeTorque ($x: number, $y: number, $z: number) : void
            /** Applies force at position. As a result this will apply a torque and force on the object. * @param force Force vector in world coordinates.
            * @param position Position in world coordinates.
            * @param mode Type of force to apply.
            */
            public AddForceAtPosition ($force: UnityEngine.Vector3, $position: UnityEngine.Vector3, $mode: UnityEngine.ForceMode) : void
            /** Applies force at position. As a result this will apply a torque and force on the object. * @param force Force vector in world coordinates.
            * @param position Position in world coordinates.
            * @param mode Type of force to apply.
            */
            public AddForceAtPosition ($force: UnityEngine.Vector3, $position: UnityEngine.Vector3) : void
            /** Applies a force to a rigidbody that simulates explosion effects. * @param explosionForce The force of the explosion (which may be modified by distance).
            * @param explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number, $mode: UnityEngine.ForceMode) : void
            /** Applies a force to a rigidbody that simulates explosion effects. * @param explosionForce The force of the explosion (which may be modified by distance).
            * @param explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number, $upwardsModifier: number) : void
            /** Applies a force to a rigidbody that simulates explosion effects. * @param explosionForce The force of the explosion (which may be modified by distance).
            * @param explosionPosition The centre of the sphere within which the explosion has its effect.
            * @param explosionRadius The radius of the sphere within which the explosion has its effect.
            * @param upwardsModifier Adjustment to the apparent position of the explosion to make it seem to lift objects.
            * @param mode The method used to apply the force to its targets.
            */
            public AddExplosionForce ($explosionForce: number, $explosionPosition: UnityEngine.Vector3, $explosionRadius: number) : void
            /** The closest point to the bounding box of the attached colliders. */
            public ClosestPointOnBounds ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Tests if a rigidbody would collide with anything, if it was moved through the Scene.
            * @param direction The direction into which to sweep the rigidbody.
            * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit (See Also: RaycastHit).
            * @param maxDistance The length of the sweep.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the rigidbody sweep intersects any collider, otherwise false. 
            */
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public SweepTest ($direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Like Rigidbody.SweepTest, but returns all hits.
            * @param direction The direction into which to sweep the rigidbody.
            * @param maxDistance The length of the sweep.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of all colliders hit in the sweep. 
            */
            public SweepTestAll ($direction: UnityEngine.Vector3, $maxDistance: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public SweepTestAll ($direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public SweepTestAll ($direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            public constructor ()
        }
        /** A body that forms part of a Physics articulation. */
        class ArticulationBody extends UnityEngine.Behaviour
        {
        }
        /** Behaviours are Components that can be enabled or disabled. */
        class Behaviour extends UnityEngine.Component
        {
        /** Enabled Behaviours are Updated, disabled Behaviours are not. */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Has the Behaviour had active and enabled called? */
            public get isActiveAndEnabled(): boolean;
            public constructor ()
        }
        /** A standard 4x4 transformation matrix. */
        class Matrix4x4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Matrix4x4>, System.IFormattable
        {
            public m00 : number
            public m10 : number
            public m20 : number
            public m30 : number
            public m01 : number
            public m11 : number
            public m21 : number
            public m31 : number
            public m02 : number
            public m12 : number
            public m22 : number
            public m32 : number
            public m03 : number
            public m13 : number
            public m23 : number
            public m33 : number/** Attempts to get a rotation quaternion from this matrix. */
            public get rotation(): UnityEngine.Quaternion;
            /** Attempts to get a scale value from the matrix. (Read Only) */
            public get lossyScale(): UnityEngine.Vector3;
            /** Checks whether this is an identity matrix. (Read Only) */
            public get isIdentity(): boolean;
            /** The determinant of the matrix. (Read Only) */
            public get determinant(): number;
            /** This property takes a projection matrix and returns the six plane coordinates that define a projection frustum. */
            public get decomposeProjection(): UnityEngine.FrustumPlanes;
            /** The inverse of this matrix. (Read Only) */
            public get inverse(): UnityEngine.Matrix4x4;
            /** Returns the transpose of this matrix (Read Only). */
            public get transpose(): UnityEngine.Matrix4x4;
            /** Returns a matrix with all elements set to zero (Read Only). */
            public static get zero(): UnityEngine.Matrix4x4;
            /** Returns the identity matrix (Read Only). */
            public static get identity(): UnityEngine.Matrix4x4;
            public ValidTRS () : boolean
            public static Determinant ($m: UnityEngine.Matrix4x4) : number
            /** Creates a translation, rotation and scaling matrix. */
            public static TRS ($pos: UnityEngine.Vector3, $q: UnityEngine.Quaternion, $s: UnityEngine.Vector3) : UnityEngine.Matrix4x4
            /** Sets this matrix to a translation, rotation and scaling matrix. */
            public SetTRS ($pos: UnityEngine.Vector3, $q: UnityEngine.Quaternion, $s: UnityEngine.Vector3) : void
            /** Computes the inverse of a 3D affine matrix.
            * @param input Input matrix to invert.
            * @param result The result of the inversion. Equal to the input matrix if the function fails.
            * @returns Returns true and a valid result if the function succeeds, false and a copy of the input matrix if the function fails. 
            */
            public static Inverse3DAffine ($input: UnityEngine.Matrix4x4, $result: $Ref<UnityEngine.Matrix4x4>) : boolean
            public static Inverse ($m: UnityEngine.Matrix4x4) : UnityEngine.Matrix4x4
            public static Transpose ($m: UnityEngine.Matrix4x4) : UnityEngine.Matrix4x4
            /** Create an orthogonal projection matrix.
            * @param left Left-side x-coordinate.
            * @param right Right-side x-coordinate.
            * @param bottom Bottom y-coordinate.
            * @param top Top y-coordinate.
            * @param zNear Near depth clipping plane value.
            * @param zFar Far depth clipping plane value.
            * @returns The projection matrix. 
            */
            public static Ortho ($left: number, $right: number, $bottom: number, $top: number, $zNear: number, $zFar: number) : UnityEngine.Matrix4x4
            /** Create a perspective projection matrix.
            * @param fov Vertical field-of-view in degrees.
            * @param aspect Aspect ratio (width divided by height).
            * @param zNear Near depth clipping plane value.
            * @param zFar Far depth clipping plane value.
            * @returns The projection matrix. 
            */
            public static Perspective ($fov: number, $aspect: number, $zNear: number, $zFar: number) : UnityEngine.Matrix4x4
            /** Create a "look at" matrix.
            * @param from The source point.
            * @param to The target point.
            * @param up The vector describing the up direction (typically Vector3.up).
            * @returns The resulting transformation matrix. 
            */
            public static LookAt ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $up: UnityEngine.Vector3) : UnityEngine.Matrix4x4
            /** This function returns a projection matrix with viewing frustum that has a near plane defined by the coordinates that were passed in.
            * @param left The X coordinate of the left side of the near projection plane in view space.
            * @param right The X coordinate of the right side of the near projection plane in view space.
            * @param bottom The Y coordinate of the bottom side of the near projection plane in view space.
            * @param top The Y coordinate of the top side of the near projection plane in view space.
            * @param zNear Z distance to the near plane from the origin in view space.
            * @param zFar Z distance to the far plane from the origin in view space.
            * @param frustumPlanes Frustum planes struct that contains the view space coordinates of that define a viewing frustum.
            * @returns A projection matrix with a viewing frustum defined by the plane coordinates passed in. 
            */
            public static Frustum ($left: number, $right: number, $bottom: number, $top: number, $zNear: number, $zFar: number) : UnityEngine.Matrix4x4
            /** This function returns a projection matrix with viewing frustum that has a near plane defined by the coordinates that were passed in.
            * @param left The X coordinate of the left side of the near projection plane in view space.
            * @param right The X coordinate of the right side of the near projection plane in view space.
            * @param bottom The Y coordinate of the bottom side of the near projection plane in view space.
            * @param top The Y coordinate of the top side of the near projection plane in view space.
            * @param zNear Z distance to the near plane from the origin in view space.
            * @param zFar Z distance to the far plane from the origin in view space.
            * @param frustumPlanes Frustum planes struct that contains the view space coordinates of that define a viewing frustum.
            * @returns A projection matrix with a viewing frustum defined by the plane coordinates passed in. 
            */
            public static Frustum ($fp: UnityEngine.FrustumPlanes) : UnityEngine.Matrix4x4
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Matrix4x4) : boolean
            public static op_Multiply ($lhs: UnityEngine.Matrix4x4, $rhs: UnityEngine.Matrix4x4) : UnityEngine.Matrix4x4
            public static op_Multiply ($lhs: UnityEngine.Matrix4x4, $vector: UnityEngine.Vector4) : UnityEngine.Vector4
            public static op_Equality ($lhs: UnityEngine.Matrix4x4, $rhs: UnityEngine.Matrix4x4) : boolean
            public static op_Inequality ($lhs: UnityEngine.Matrix4x4, $rhs: UnityEngine.Matrix4x4) : boolean
            /** Get a column of the matrix. */
            public GetColumn ($index: number) : UnityEngine.Vector4
            /** Returns a row of the matrix. */
            public GetRow ($index: number) : UnityEngine.Vector4
            /** Sets a column of the matrix. */
            public SetColumn ($index: number, $column: UnityEngine.Vector4) : void
            /** Sets a row of the matrix. */
            public SetRow ($index: number, $row: UnityEngine.Vector4) : void
            /** Transforms a position by this matrix (generic). */
            public MultiplyPoint ($point: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms a position by this matrix (fast). */
            public MultiplyPoint3x4 ($point: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms a direction by this matrix. */
            public MultiplyVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns a plane that is transformed in space. */
            public TransformPlane ($plane: UnityEngine.Plane) : UnityEngine.Plane
            /** Creates a scaling matrix. */
            public static Scale ($vector: UnityEngine.Vector3) : UnityEngine.Matrix4x4
            /** Creates a translation matrix. */
            public static Translate ($vector: UnityEngine.Vector3) : UnityEngine.Matrix4x4
            /** Creates a rotation matrix. */
            public static Rotate ($q: UnityEngine.Quaternion) : UnityEngine.Matrix4x4
            public ToString () : string
            /** Returns a formatted string for this matrix. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this matrix. * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($column0: UnityEngine.Vector4, $column1: UnityEngine.Vector4, $column2: UnityEngine.Vector4, $column3: UnityEngine.Vector4)
        }
        /** This struct contains the view space coordinates of the near projection plane. */
        class FrustumPlanes extends System.ValueType
        {
        }
        /** Representation of a plane in 3D space. */
        class Plane extends System.ValueType implements System.IFormattable
        {
        }
        /** Provides an interface to get time information from Unity. */
        class Time extends System.Object
        {
        /** The time at the beginning of this frame (Read Only). */
            public static get time(): number;
            /** The double precision time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get timeAsDouble(): number;
            /** The time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
            public static get timeSinceLevelLoad(): number;
            /** The double precision time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
            public static get timeSinceLevelLoadAsDouble(): number;
            /** The interval in seconds from the last frame to the current one (Read Only). */
            public static get deltaTime(): number;
            /** The time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTime(): number;
            /** The double precision time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTimeAsDouble(): number;
            /** The timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTime(): number;
            /** The double precision timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTimeAsDouble(): number;
            /** The timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate phase (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTime(): number;
            /** The double precision timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTimeAsDouble(): number;
            /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only). */
            public static get unscaledDeltaTime(): number;
            /** The timeScale-independent interval in seconds from the last MonoBehaviour.FixedUpdate phase to the current one (Read Only). */
            public static get fixedUnscaledDeltaTime(): number;
            /** The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed. */
            public static get fixedDeltaTime(): number;
            public static set fixedDeltaTime(value: number);
            /** The maximum value of Time.deltaTime in any given frame. This is a time in seconds that limits the increase of Time.time between two frames. */
            public static get maximumDeltaTime(): number;
            public static set maximumDeltaTime(value: number);
            /** A smoothed out Time.deltaTime (Read Only). */
            public static get smoothDeltaTime(): number;
            /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates. */
            public static get maximumParticleDeltaTime(): number;
            public static set maximumParticleDeltaTime(value: number);
            /** The scale at which time passes. */
            public static get timeScale(): number;
            public static set timeScale(value: number);
            /** The total number of frames since the start of the game (Read Only). */
            public static get frameCount(): number;
            public static get renderedFrameCount(): number;
            /** The real time in seconds since the game started (Read Only). */
            public static get realtimeSinceStartup(): number;
            /** The real time in seconds since the game started (Read Only). Double precision version of Time.realtimeSinceStartup.  */
            public static get realtimeSinceStartupAsDouble(): number;
            /** Slows your application’s playback time to allow Unity to save screenshots in between frames. */
            public static get captureDeltaTime(): number;
            public static set captureDeltaTime(value: number);
            /** The reciprocal of Time.captureDeltaTime. */
            public static get captureFramerate(): number;
            public static set captureFramerate(value: number);
            /** Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false. */
            public static get inFixedTimeStep(): boolean;
            public constructor ()
        }
        /** Class containing methods to ease debugging while developing a game. */
        class Debug extends System.Object
        {
        /** Get default debug logger. */
            public static get unityLogger(): UnityEngine.ILogger;
            /** Reports whether the development console is visible. The development console cannot be made to appear using: */
            public static get developerConsoleVisible(): boolean;
            public static set developerConsoleVisible(value: boolean);
            /** In the Build Settings dialog there is a check box called "Development Build". */
            public static get isDebugBuild(): boolean;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color) : void
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3) : void
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color) : void
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3) : void
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
            public static Break () : void
            public static DebugBreak () : void
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static Log ($message: any) : void
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static Log ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogError ($message: any) : void
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogError ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogErrorFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogErrorFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            public static ClearDeveloperConsole () : void
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
            * @param exception Runtime Exception.
            */
            public static LogException ($exception: System.Exception) : void
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
            * @param exception Runtime Exception.
            */
            public static LogException ($exception: System.Exception, $context: UnityEngine.Object) : void
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogWarning ($message: any) : void
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogWarning ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogWarningFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogWarningFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean) : void
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $context: UnityEngine.Object) : void
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $message: any) : void
            public static Assert ($condition: boolean, $message: string) : void
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $message: any, $context: UnityEngine.Object) : void
            public static Assert ($condition: boolean, $message: string, $context: UnityEngine.Object) : void
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static AssertFormat ($condition: boolean, $format: string, ...args: any[]) : void
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static AssertFormat ($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogAssertion ($message: any) : void
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogAssertion ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogAssertionFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogAssertionFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            public constructor ()
        }
        interface ILogger extends UnityEngine.ILogHandler
        {
        }
        interface ILogHandler
        {
        }
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback. */
        enum LogType
        { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        /** Option flags for specifying special treatment of a log message. */
        enum LogOption
        { None = 0, NoStacktrace = 1 }
        /** The coordinate space in which to operate. */
        enum Space
        { World = 0, Self = 1 }
        /** Bit mask that controls object destruction, saving and visibility in inspectors. */
        enum HideFlags
        { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        /** Base class for all entities in Unity Scenes. */
        class GameObject extends UnityEngine.Object
        {
        /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            /** The layer the game object is in. */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only) */
            public get activeSelf(): boolean;
            /** Defines whether the GameObject is active in the Scene. */
            public get activeInHierarchy(): boolean;
            /** Gets and sets the GameObject's StaticEditorFlags. */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of. */
            public get scene(): UnityEngine.SceneManagement.Scene;
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in. */
            public get sceneCullingMask(): bigint;
            public get gameObject(): UnityEngine.GameObject;
            /** Creates a game object with a primitive mesh renderer and appropriate collider. * @param type The type of primitive object to create.
            */
            public static CreatePrimitive ($type: UnityEngine.PrimitiveType) : UnityEngine.GameObject
            /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** Returns the component with name type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: string) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param type The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param type The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type) : UnityEngine.Component
            /** Retrieves the component of Type type in the GameObject or any of its parents.
            * @param type Type of component to find.
            * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
            */
            public GetComponentInParent ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Retrieves the component of Type type in the GameObject or any of its parents.
            * @param type Type of component to find.
            * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
            */
            public GetComponentInParent ($type: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject. * @param type The type of component to retrieve.
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            */
            public GetComponentsInChildren ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            */
            public GetComponentsInChildren ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject or any of its parents. * @param type The type of Component to retrieve.
            * @param includeInactive Should inactive Components be included in the found set?
            */
            public GetComponentsInParent ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            /** Gets the component of the specified type, if it exists.
            * @param type The type of component to retrieve.
            * @param component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found. * @param tag The tag to search for.
            */
            public static FindWithTag ($tag: string) : UnityEngine.GameObject
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Adds a component class of type componentType to the game object. C# Users can use a generic version. */
            public AddComponent ($componentType: System.Type) : UnityEngine.Component
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value. * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
            */
            public SetActive ($value: boolean) : void
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
            */
            public CompareTag ($tag: string) : boolean
            public static FindGameObjectWithTag ($tag: string) : UnityEngine.GameObject
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found. * @param tag The name of the tag to search GameObjects for.
            */
            public static FindGameObjectsWithTag ($tag: string) : System.Array$1<UnityEngine.GameObject>
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage ($methodName: string) : void
            /** Finds a GameObject by name and returns it. */
            public static Find ($name: string) : UnityEngine.GameObject
            public constructor ($name: string)
            public constructor ()
            public constructor ($name: string, ...components: System.Type[])
        }
        /** The various primitives that can be created using the GameObject.CreatePrimitive function. */
        enum PrimitiveType
        { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        /** Options for how to send a message. */
        enum SendMessageOptions
        { RequireReceiver = 0, DontRequireReceiver = 1 }
        /** MonoBehaviour is the base class from which every Unity script derives. */
        class MonoBehaviour extends UnityEngine.Behaviour
        {
        /** Disabling this lets you skip the GUI layout phase. */
            public get useGUILayout(): boolean;
            public set useGUILayout(value: boolean);
            /** Allow a specific instance of a MonoBehaviour to run in edit mode (only available in the editor). */
            public get runInEditMode(): boolean;
            public set runInEditMode(value: boolean);
            public IsInvoking () : boolean
            public CancelInvoke () : void
            /** Invokes the method methodName in time seconds. */
            public Invoke ($methodName: string, $time: number) : void
            /** Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds. */
            public InvokeRepeating ($methodName: string, $time: number, $repeatRate: number) : void
            /** Cancels all Invoke calls with name methodName on this behaviour. */
            public CancelInvoke ($methodName: string) : void
            /** Is any invoke on methodName pending? */
            public IsInvoking ($methodName: string) : boolean
            /** Starts a coroutine named methodName. */
            public StartCoroutine ($methodName: string) : UnityEngine.Coroutine
            /** Starts a coroutine named methodName. */
            public StartCoroutine ($methodName: string, $value: any) : UnityEngine.Coroutine
            /** Starts a Coroutine. */
            public StartCoroutine ($routine: System.Collections.IEnumerator) : UnityEngine.Coroutine
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
            * @param routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($routine: System.Collections.IEnumerator) : void
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
            * @param routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($routine: UnityEngine.Coroutine) : void
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour. * @param methodName Name of coroutine.
            * @param routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($methodName: string) : void
            public StopAllCoroutines () : void
            /** Logs message to the Unity Console (identical to Debug.Log). */
            public static print ($message: any) : void
            public constructor ()
        }
        /** MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions. */
        class Coroutine extends UnityEngine.YieldInstruction
        {
        }
        /** Base class for all yield instructions. */
        class YieldInstruction extends System.Object
        {
        }
        /** A container for audio data. */
        class AudioClip extends UnityEngine.Object
        {
        /** The length of the audio clip in seconds. (Read Only) */
            public get length(): number;
            /** The length of the audio clip in samples. (Read Only) */
            public get samples(): number;
            /** The number of channels in the audio clip. (Read Only) */
            public get channels(): number;
            /** The sample frequency of the clip in Hertz. (Read Only) */
            public get frequency(): number;
            /** The load type of the clip (read-only). */
            public get loadType(): UnityEngine.AudioClipLoadType;
            /** Preloads audio data of the clip when the clip asset is loaded. When this flag is off, scripts have to call AudioClip.LoadAudioData() to load the data before the clip can be played. Properties like length, channels and format are available before the audio data has been loaded. */
            public get preloadAudioData(): boolean;
            /** Returns true if this audio clip is ambisonic (read-only). */
            public get ambisonic(): boolean;
            /** Corresponding to the "Load In Background" flag in the inspector, when this flag is set, the loading will happen delayed without blocking the main thread. */
            public get loadInBackground(): boolean;
            /** Returns the current load state of the audio data associated with an AudioClip. */
            public get loadState(): UnityEngine.AudioDataLoadState;
            public LoadAudioData () : boolean
            public UnloadAudioData () : boolean
            /** Fills an array with sample data from the clip. */
            public GetData ($data: System.Array$1<number>, $offsetSamples: number) : boolean
            /** Set sample data in a clip. */
            public SetData ($data: System.Array$1<number>, $offsetSamples: number) : boolean
            /** Creates a user AudioClip with a name and with the given length in samples, channels and frequency.
            * @param name Name of clip.
            * @param lengthSamples Number of sample frames.
            * @param channels Number of channels per frame.
            * @param frequency Sample frequency of clip.
            * @param _3D Audio clip is played back in 3D.
            * @param stream True if clip is streamed, that is if the pcmreadercallback generates data on the fly.
            * @param pcmreadercallback This callback is invoked to generate a block of sample data. Non-streamed clips call this only once at creation time while streamed clips call this continuously.
            * @param pcmsetpositioncallback This callback is invoked whenever the clip loops or changes playback position.
            * @returns A reference to the created AudioClip. 
            */
            public static Create ($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean) : UnityEngine.AudioClip
            public static Create ($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback) : UnityEngine.AudioClip
            public static Create ($name: string, $lengthSamples: number, $channels: number, $frequency: number, $stream: boolean, $pcmreadercallback: UnityEngine.AudioClip.PCMReaderCallback, $pcmsetpositioncallback: UnityEngine.AudioClip.PCMSetPositionCallback) : UnityEngine.AudioClip
        }
        /** Determines how the audio clip is loaded in. */
        enum AudioClipLoadType
        { DecompressOnLoad = 0, CompressedInMemory = 1, Streaming = 2 }
        /** Value describing the current load state of the audio data associated with an AudioClip. */
        enum AudioDataLoadState
        { Unloaded = 0, Loading = 1, Loaded = 2, Failed = 3 }
        /** The space to simulate particles in. */
        enum ParticleSystemSimulationSpace
        { Local = 0, World = 1, Custom = 2 }
        /** Control how particle systems apply transform scale. */
        enum ParticleSystemScalingMode
        { Hierarchy = 0, Local = 1, Shape = 2 }
        /** Control how a Particle System calculates its velocity. */
        enum ParticleSystemEmitterVelocityMode
        { Transform = 0, Rigidbody = 1 }
        /** The action to perform when the Particle System stops. */
        enum ParticleSystemStopAction
        { None = 0, Disable = 1, Destroy = 2, Callback = 3 }
        /** Control how particles are removed from the Particle System. */
        enum ParticleSystemRingBufferMode
        { Disabled = 0, PauseUntilReplaced = 1, LoopUntilReplaced = 2 }
        /** The action to perform when the Particle System is offscreen. */
        enum ParticleSystemCullingMode
        { Automatic = 0, PauseAndCatchup = 1, Pause = 2, AlwaysSimulate = 3 }
        /** Stores keyframe based animations. */
        class AnimationClip extends UnityEngine.Motion
        {
        /** Animation length in seconds. (Read Only) */
            public get length(): number;
            /** Frame rate at which keyframes are sampled. (Read Only) */
            public get frameRate(): number;
            public set frameRate(value: number);
            /** Sets the default wrap mode used in the animation state. */
            public get wrapMode(): UnityEngine.WrapMode;
            public set wrapMode(value: UnityEngine.WrapMode);
            /** AABB of this Animation Clip in local space of Animation component that it is attached too. */
            public get localBounds(): UnityEngine.Bounds;
            public set localBounds(value: UnityEngine.Bounds);
            /** Set to true if the AnimationClip will be used with the Legacy Animation component ( instead of the Animator ). */
            public get legacy(): boolean;
            public set legacy(value: boolean);
            /** Returns true if the animation contains curve that drives a humanoid rig. */
            public get humanMotion(): boolean;
            /** Returns true if the animation clip has no curves and no events. */
            public get empty(): boolean;
            /** Returns true if the Animation has animation on the root transform. */
            public get hasGenericRootTransform(): boolean;
            /** Returns true if the AnimationClip has editor curves for its root motion. */
            public get hasMotionFloatCurves(): boolean;
            /** Returns true if the AnimationClip has root motion curves. */
            public get hasMotionCurves(): boolean;
            /** Returns true if the AnimationClip has root Curves. */
            public get hasRootCurves(): boolean;
            /** Animation Events for this animation clip. */
            public get events(): System.Array$1<UnityEngine.AnimationEvent>;
            public set events(value: System.Array$1<UnityEngine.AnimationEvent>);
            /** Samples an animation at a given time for any animated properties. * @param go The animated game object.
            * @param time The time to sample an animation.
            */
            public SampleAnimation ($go: UnityEngine.GameObject, $time: number) : void
            /** Assigns the curve to animate a specific property. * @param relativePath Path to the game object this curve applies to. The relativePath
            is formatted similar to a pathname, e.g. "rootspineleftArm".  If relativePath
            is empty it refers to the game object the animation clip is attached to.
            * @param type The class type of the component that is animated.
            * @param propertyName The name or path to the property being animated.
            * @param curve The animation curve.
            */
            public SetCurve ($relativePath: string, $type: System.Type, $propertyName: string, $curve: UnityEngine.AnimationCurve) : void
            public EnsureQuaternionContinuity () : void
            public ClearCurves () : void
            /** Adds an animation event to the clip. * @param evt AnimationEvent to add.
            */
            public AddEvent ($evt: UnityEngine.AnimationEvent) : void
            public constructor ()
        }
        /** Base class for AnimationClips and BlendTrees. */
        class Motion extends UnityEngine.Object
        {
        }
        /** Store a collection of Keyframes that can be evaluated over time. */
        class AnimationCurve extends System.Object implements System.IEquatable$1<UnityEngine.AnimationCurve>
        {
        /** All keys defined in the animation curve. */
            public get keys(): System.Array$1<UnityEngine.Keyframe>;
            public set keys(value: System.Array$1<UnityEngine.Keyframe>);
            /** The number of keys in the curve. (Read Only) */
            public get length(): number;
            /** The behaviour of the animation before the first keyframe. */
            public get preWrapMode(): UnityEngine.WrapMode;
            public set preWrapMode(value: UnityEngine.WrapMode);
            /** The behaviour of the animation after the last keyframe. */
            public get postWrapMode(): UnityEngine.WrapMode;
            public set postWrapMode(value: UnityEngine.WrapMode);
            /** Evaluate the curve at time.
            * @param time The time within the curve you want to evaluate (the horizontal axis in the curve graph).
            * @returns The value of the curve, at the point in time specified. 
            */
            public Evaluate ($time: number) : number
            /** Add a new key to the curve.
            * @param time The time at which to add the key (horizontal axis in the curve graph).
            * @param value The value for the key (vertical axis in the curve graph).
            * @returns The index of the added key, or -1 if the key could not be added. 
            */
            public AddKey ($time: number, $value: number) : number
            /** Add a new key to the curve.
            * @param key The key to add to the curve.
            * @returns The index of the added key, or -1 if the key could not be added. 
            */
            public AddKey ($key: UnityEngine.Keyframe) : number
            /** Removes the keyframe at index and inserts key.
            * @param index The index of the key to move.
            * @param key The key (with its new time) to insert.
            * @returns The index of the keyframe after moving it. 
            */
            public MoveKey ($index: number, $key: UnityEngine.Keyframe) : number
            /** Removes a key. * @param index The index of the key to remove.
            */
            public RemoveKey ($index: number) : void
            public get_Item ($index: number) : UnityEngine.Keyframe
            /** Smooth the in and out tangents of the keyframe at index. * @param index The index of the keyframe to be smoothed.
            * @param weight The smoothing weight to apply to the keyframe's tangents.
            */
            public SmoothTangents ($index: number, $weight: number) : void
            /** Creates a constant "curve" starting at timeStart, ending at timeEnd and with the value value.
            * @param timeStart The start time for the constant curve.
            * @param timeEnd The start time for the constant curve.
            * @param value The value for the constant curve.
            * @returns The constant curve created from the specified values. 
            */
            public static Constant ($timeStart: number, $timeEnd: number, $value: number) : UnityEngine.AnimationCurve
            /** A straight Line starting at timeStart, valueStart and ending at timeEnd, valueEnd.
            * @param timeStart The start time for the linear curve.
            * @param valueStart The start value for the linear curve.
            * @param timeEnd The end time for the linear curve.
            * @param valueEnd The end value for the linear curve.
            * @returns The linear curve created from the specified values. 
            */
            public static Linear ($timeStart: number, $valueStart: number, $timeEnd: number, $valueEnd: number) : UnityEngine.AnimationCurve
            /** Creates an ease-in and out curve starting at timeStart, valueStart and ending at timeEnd, valueEnd.
            * @param timeStart The start time for the ease curve.
            * @param valueStart The start value for the ease curve.
            * @param timeEnd The end time for the ease curve.
            * @param valueEnd The end value for the ease curve.
            * @returns The ease-in and out curve generated from the specified values. 
            */
            public static EaseInOut ($timeStart: number, $valueStart: number, $timeEnd: number, $valueEnd: number) : UnityEngine.AnimationCurve
            public Equals ($o: any) : boolean
            public Equals ($other: UnityEngine.AnimationCurve) : boolean
            public constructor (...keys: UnityEngine.Keyframe[])
            public constructor ()
        }
        /** Determines how time is treated outside of the keyframed range of an AnimationClip or AnimationCurve. */
        enum WrapMode
        { Once = 1, Loop = 2, PingPong = 4, Default = 0, ClampForever = 8, Clamp = 1 }
        /** AnimationEvent lets you call a script function similar to SendMessage as part of playing back an animation. */
        class AnimationEvent extends System.Object
        {
        }
        /** Interface to control the Mecanim animation system. */
        class Animator extends UnityEngine.Behaviour
        {
        /** Returns true if the current rig is optimizable with AnimatorUtility.OptimizeTransformHierarchy. */
            public get isOptimizable(): boolean;
            /** Returns true if the current rig is humanoid, false if it is generic. */
            public get isHuman(): boolean;
            /** Returns true if the current rig has root motion. */
            public get hasRootMotion(): boolean;
            /** Returns the scale of the current Avatar for a humanoid rig, (1 by default if the rig is generic). */
            public get humanScale(): number;
            /** Returns whether the animator is initialized successfully. */
            public get isInitialized(): boolean;
            /** Gets the avatar delta position for the last evaluated frame. */
            public get deltaPosition(): UnityEngine.Vector3;
            /** Gets the avatar delta rotation for the last evaluated frame. */
            public get deltaRotation(): UnityEngine.Quaternion;
            /** Gets the avatar velocity  for the last evaluated frame. */
            public get velocity(): UnityEngine.Vector3;
            /** Gets the avatar angular velocity for the last evaluated frame. */
            public get angularVelocity(): UnityEngine.Vector3;
            /** The root position, the position of the game object. */
            public get rootPosition(): UnityEngine.Vector3;
            public set rootPosition(value: UnityEngine.Vector3);
            /** The root rotation, the rotation of the game object. */
            public get rootRotation(): UnityEngine.Quaternion;
            public set rootRotation(value: UnityEngine.Quaternion);
            /** Should root motion be applied? */
            public get applyRootMotion(): boolean;
            public set applyRootMotion(value: boolean);
            /** Specifies the update mode of the Animator. */
            public get updateMode(): UnityEngine.AnimatorUpdateMode;
            public set updateMode(value: UnityEngine.AnimatorUpdateMode);
            /** Returns true if the object has a transform hierarchy. */
            public get hasTransformHierarchy(): boolean;
            /** The current gravity weight based on current animations that are played. */
            public get gravityWeight(): number;
            /** The position of the body center of mass. */
            public get bodyPosition(): UnityEngine.Vector3;
            public set bodyPosition(value: UnityEngine.Vector3);
            /** The rotation of the body center of mass. */
            public get bodyRotation(): UnityEngine.Quaternion;
            public set bodyRotation(value: UnityEngine.Quaternion);
            /** Automatic stabilization of feet during transition and blending. */
            public get stabilizeFeet(): boolean;
            public set stabilizeFeet(value: boolean);
            /** Returns the number of layers in the controller. */
            public get layerCount(): number;
            /** The AnimatorControllerParameter list used by the animator. (Read Only) */
            public get parameters(): System.Array$1<UnityEngine.AnimatorControllerParameter>;
            /** Returns the number of parameters in the controller. */
            public get parameterCount(): number;
            /** Blends pivot point between body center of mass and feet pivot. */
            public get feetPivotActive(): number;
            public set feetPivotActive(value: number);
            /** Gets the pivot weight. */
            public get pivotWeight(): number;
            /** Get the current position of the pivot. */
            public get pivotPosition(): UnityEngine.Vector3;
            /** If automatic matching is active. */
            public get isMatchingTarget(): boolean;
            /** The playback speed of the Animator. 1 is normal playback speed. */
            public get speed(): number;
            public set speed(value: number);
            /** Returns the position of the target specified by SetTarget. */
            public get targetPosition(): UnityEngine.Vector3;
            /** Returns the rotation of the target specified by SetTarget. */
            public get targetRotation(): UnityEngine.Quaternion;
            /** Controls culling of this Animator component. */
            public get cullingMode(): UnityEngine.AnimatorCullingMode;
            public set cullingMode(value: UnityEngine.AnimatorCullingMode);
            /** Sets the playback position in the recording buffer. */
            public get playbackTime(): number;
            public set playbackTime(value: number);
            /** Start time of the first frame of the buffer relative to the frame at which StartRecording was called. */
            public get recorderStartTime(): number;
            public set recorderStartTime(value: number);
            /** End time of the recorded clip relative to when StartRecording was called. */
            public get recorderStopTime(): number;
            public set recorderStopTime(value: number);
            /** Gets the mode of the Animator recorder. */
            public get recorderMode(): UnityEngine.AnimatorRecorderMode;
            /** The runtime representation of AnimatorController that controls the Animator. */
            public get runtimeAnimatorController(): UnityEngine.RuntimeAnimatorController;
            public set runtimeAnimatorController(value: UnityEngine.RuntimeAnimatorController);
            /** Returns true if Animator has any playables assigned to it. */
            public get hasBoundPlayables(): boolean;
            /** Gets/Sets the current Avatar. */
            public get avatar(): UnityEngine.Avatar;
            public set avatar(value: UnityEngine.Avatar);
            /** The PlayableGraph created by the Animator. */
            public get playableGraph(): UnityEngine.Playables.PlayableGraph;
            /** Additional layers affects the center of mass. */
            public get layersAffectMassCenter(): boolean;
            public set layersAffectMassCenter(value: boolean);
            /** Get left foot bottom height. */
            public get leftFeetBottomHeight(): number;
            /** Get right foot bottom height. */
            public get rightFeetBottomHeight(): number;
            public get logWarnings(): boolean;
            public set logWarnings(value: boolean);
            /** Sets whether the Animator sends events of type AnimationEvent. */
            public get fireEvents(): boolean;
            public set fireEvents(value: boolean);
            /** Controls the behaviour of the Animator component when a GameObject is disabled. */
            public get keepAnimatorControllerStateOnDisable(): boolean;
            public set keepAnimatorControllerStateOnDisable(value: boolean);
            /** Returns the value of the given float parameter.
            * @param name The parameter name.
            * @param id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetFloat ($name: string) : number
            /** Returns the value of the given float parameter.
            * @param name The parameter name.
            * @param id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetFloat ($id: number) : number
            /** Send float values to the Animator to affect transitions. * @param name The parameter name.
            * @param id The parameter ID.
            * @param value The new parameter value.
            * @param dampTime The damper total time.
            * @param deltaTime The delta time to give to the damper.
            */
            public SetFloat ($name: string, $value: number) : void
            /** Send float values to the Animator to affect transitions. * @param name The parameter name.
            * @param id The parameter ID.
            * @param value The new parameter value.
            * @param dampTime The damper total time.
            * @param deltaTime The delta time to give to the damper.
            */
            public SetFloat ($name: string, $value: number, $dampTime: number, $deltaTime: number) : void
            /** Send float values to the Animator to affect transitions. * @param name The parameter name.
            * @param id The parameter ID.
            * @param value The new parameter value.
            * @param dampTime The damper total time.
            * @param deltaTime The delta time to give to the damper.
            */
            public SetFloat ($id: number, $value: number) : void
            /** Send float values to the Animator to affect transitions. * @param name The parameter name.
            * @param id The parameter ID.
            * @param value The new parameter value.
            * @param dampTime The damper total time.
            * @param deltaTime The delta time to give to the damper.
            */
            public SetFloat ($id: number, $value: number, $dampTime: number, $deltaTime: number) : void
            /** Returns the value of the given boolean parameter.
            * @param name The parameter name.
            * @param id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetBool ($name: string) : boolean
            /** Returns the value of the given boolean parameter.
            * @param name The parameter name.
            * @param id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetBool ($id: number) : boolean
            /** Sets the value of the given boolean parameter. * @param name The parameter name.
            * @param id The parameter ID.
            * @param value The new parameter value.
            */
            public SetBool ($name: string, $value: boolean) : void
            /** Sets the value of the given boolean parameter. * @param name The parameter name.
            * @param id The parameter ID.
            * @param value The new parameter value.
            */
            public SetBool ($id: number, $value: boolean) : void
            /** Returns the value of the given integer parameter.
            * @param name The parameter name.
            * @param id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetInteger ($name: string) : number
            /** Returns the value of the given integer parameter.
            * @param name The parameter name.
            * @param id The parameter ID.
            * @returns The value of the parameter. 
            */
            public GetInteger ($id: number) : number
            /** Sets the value of the given integer parameter. * @param name The parameter name.
            * @param id The parameter ID.
            * @param value The new parameter value.
            */
            public SetInteger ($name: string, $value: number) : void
            /** Sets the value of the given integer parameter. * @param name The parameter name.
            * @param id The parameter ID.
            * @param value The new parameter value.
            */
            public SetInteger ($id: number, $value: number) : void
            /** Sets the value of the given trigger parameter. * @param name The parameter name.
            * @param id The parameter ID.
            */
            public SetTrigger ($name: string) : void
            /** Sets the value of the given trigger parameter. * @param name The parameter name.
            * @param id The parameter ID.
            */
            public SetTrigger ($id: number) : void
            /** Resets the value of the given trigger parameter. * @param name The parameter name.
            * @param id The parameter ID.
            */
            public ResetTrigger ($name: string) : void
            /** Resets the value of the given trigger parameter. * @param name The parameter name.
            * @param id The parameter ID.
            */
            public ResetTrigger ($id: number) : void
            /** Returns true if the parameter is controlled by a curve, false otherwise.
            * @param name The parameter name.
            * @param id The parameter ID.
            * @returns True if the parameter is controlled by a curve, false otherwise. 
            */
            public IsParameterControlledByCurve ($name: string) : boolean
            /** Returns true if the parameter is controlled by a curve, false otherwise.
            * @param name The parameter name.
            * @param id The parameter ID.
            * @returns True if the parameter is controlled by a curve, false otherwise. 
            */
            public IsParameterControlledByCurve ($id: number) : boolean
            /** Gets the position of an IK goal.
            * @param goal The AvatarIKGoal that is queried.
            * @returns Return the current position of this IK goal in world space. 
            */
            public GetIKPosition ($goal: UnityEngine.AvatarIKGoal) : UnityEngine.Vector3
            /** Sets the position of an IK goal. * @param goal The AvatarIKGoal that is set.
            * @param goalPosition The position in world space.
            */
            public SetIKPosition ($goal: UnityEngine.AvatarIKGoal, $goalPosition: UnityEngine.Vector3) : void
            /** Gets the rotation of an IK goal. * @param goal The AvatarIKGoal that is is queried.
            */
            public GetIKRotation ($goal: UnityEngine.AvatarIKGoal) : UnityEngine.Quaternion
            /** Sets the rotation of an IK goal. * @param goal The AvatarIKGoal that is set.
            * @param goalRotation The rotation in world space.
            */
            public SetIKRotation ($goal: UnityEngine.AvatarIKGoal, $goalRotation: UnityEngine.Quaternion) : void
            /** Gets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal). * @param goal The AvatarIKGoal that is queried.
            */
            public GetIKPositionWeight ($goal: UnityEngine.AvatarIKGoal) : number
            /** Sets the translative weight of an IK goal (0 = at the original animation before IK, 1 = at the goal). * @param goal The AvatarIKGoal that is set.
            * @param value The translative weight.
            */
            public SetIKPositionWeight ($goal: UnityEngine.AvatarIKGoal, $value: number) : void
            /** Gets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal). * @param goal The AvatarIKGoal that is queried.
            */
            public GetIKRotationWeight ($goal: UnityEngine.AvatarIKGoal) : number
            /** Sets the rotational weight of an IK goal (0 = rotation before IK, 1 = rotation at the IK goal). * @param goal The AvatarIKGoal that is set.
            * @param value The rotational weight.
            */
            public SetIKRotationWeight ($goal: UnityEngine.AvatarIKGoal, $value: number) : void
            /** Gets the position of an IK hint.
            * @param hint The AvatarIKHint that is queried.
            * @returns Return the current position of this IK hint in world space. 
            */
            public GetIKHintPosition ($hint: UnityEngine.AvatarIKHint) : UnityEngine.Vector3
            /** Sets the position of an IK hint. * @param hint The AvatarIKHint that is set.
            * @param hintPosition The position in world space.
            */
            public SetIKHintPosition ($hint: UnityEngine.AvatarIKHint, $hintPosition: UnityEngine.Vector3) : void
            /** Gets the translative weight of an IK Hint (0 = at the original animation before IK, 1 = at the hint).
            * @param hint The AvatarIKHint that is queried.
            * @returns Return translative weight. 
            */
            public GetIKHintPositionWeight ($hint: UnityEngine.AvatarIKHint) : number
            /** Sets the translative weight of an IK hint (0 = at the original animation before IK, 1 = at the hint). * @param hint The AvatarIKHint that is set.
            * @param value The translative weight.
            */
            public SetIKHintPositionWeight ($hint: UnityEngine.AvatarIKHint, $value: number) : void
            /** Sets the look at position. * @param lookAtPosition The position to lookAt.
            */
            public SetLookAtPosition ($lookAtPosition: UnityEngine.Vector3) : void
            /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
            * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
            * @param headWeight (0-1) determines how much the head is involved in the LookAt.
            * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
            * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
            */
            public SetLookAtWeight ($weight: number) : void
            /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
            * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
            * @param headWeight (0-1) determines how much the head is involved in the LookAt.
            * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
            * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
            */
            public SetLookAtWeight ($weight: number, $bodyWeight: number) : void
            /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
            * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
            * @param headWeight (0-1) determines how much the head is involved in the LookAt.
            * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
            * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
            */
            public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number) : void
            /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
            * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
            * @param headWeight (0-1) determines how much the head is involved in the LookAt.
            * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
            * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
            */
            public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number) : void
            /** Set look at weights. * @param weight (0-1) the global weight of the LookAt, multiplier for other parameters.
            * @param bodyWeight (0-1) determines how much the body is involved in the LookAt.
            * @param headWeight (0-1) determines how much the head is involved in the LookAt.
            * @param eyesWeight (0-1) determines how much the eyes are involved in the LookAt.
            * @param clampWeight (0-1) 0.0 means the character is completely unrestrained in motion, 1.0 means he's completely clamped (look at becomes impossible), and 0.5 means he'll be able to move on half of the possible range (180 degrees).
            */
            public SetLookAtWeight ($weight: number, $bodyWeight: number, $headWeight: number, $eyesWeight: number, $clampWeight: number) : void
            /** Sets local rotation of a human bone during a IK pass. * @param humanBoneId The human bone Id.
            * @param rotation The local rotation.
            */
            public SetBoneLocalRotation ($humanBoneId: UnityEngine.HumanBodyBones, $rotation: UnityEngine.Quaternion) : void
            public GetBehaviours ($fullPathHash: number, $layerIndex: number) : System.Array$1<UnityEngine.StateMachineBehaviour>
            /** Returns the layer name.
            * @param layerIndex The layer index.
            * @returns The layer name. 
            */
            public GetLayerName ($layerIndex: number) : string
            /** Returns the index of the layer with the given name.
            * @param layerName The layer name.
            * @returns The layer index. 
            */
            public GetLayerIndex ($layerName: string) : number
            /** Returns the weight of the layer at the specified index.
            * @param layerIndex The layer index.
            * @returns The layer weight. 
            */
            public GetLayerWeight ($layerIndex: number) : number
            /** Sets the weight of the layer at the given index. * @param layerIndex The layer index.
            * @param weight The new layer weight.
            */
            public SetLayerWeight ($layerIndex: number, $weight: number) : void
            /** Returns an AnimatorStateInfo with the information on the current state.
            * @param layerIndex The layer index.
            * @returns An AnimatorStateInfo with the information on the current state. 
            */
            public GetCurrentAnimatorStateInfo ($layerIndex: number) : UnityEngine.AnimatorStateInfo
            /** Returns an AnimatorStateInfo with the information on the next state.
            * @param layerIndex The layer index.
            * @returns An AnimatorStateInfo with the information on the next state. 
            */
            public GetNextAnimatorStateInfo ($layerIndex: number) : UnityEngine.AnimatorStateInfo
            /** Returns an AnimatorTransitionInfo with the informations on the current transition.
            * @param layerIndex The layer's index.
            * @returns An AnimatorTransitionInfo with the informations on the current transition. 
            */
            public GetAnimatorTransitionInfo ($layerIndex: number) : UnityEngine.AnimatorTransitionInfo
            /** Returns the number of AnimatorClipInfo in the current state.
            * @param layerIndex The layer index.
            * @returns The number of AnimatorClipInfo in the current state. 
            */
            public GetCurrentAnimatorClipInfoCount ($layerIndex: number) : number
            /** Returns the number of AnimatorClipInfo in the next state.
            * @param layerIndex The layer index.
            * @returns The number of AnimatorClipInfo in the next state. 
            */
            public GetNextAnimatorClipInfoCount ($layerIndex: number) : number
            /** Returns an array of all the AnimatorClipInfo in the current state of the given layer.
            * @param layerIndex The layer index.
            * @returns An array of all the AnimatorClipInfo in the current state. 
            */
            public GetCurrentAnimatorClipInfo ($layerIndex: number) : System.Array$1<UnityEngine.AnimatorClipInfo>
            /** Returns an array of all the AnimatorClipInfo in the next state of the given layer.
            * @param layerIndex The layer index.
            * @returns An array of all the AnimatorClipInfo in the next state. 
            */
            public GetNextAnimatorClipInfo ($layerIndex: number) : System.Array$1<UnityEngine.AnimatorClipInfo>
            public GetCurrentAnimatorClipInfo ($layerIndex: number, $clips: System.Collections.Generic.List$1<UnityEngine.AnimatorClipInfo>) : void
            public GetNextAnimatorClipInfo ($layerIndex: number, $clips: System.Collections.Generic.List$1<UnityEngine.AnimatorClipInfo>) : void
            /** Returns true if there is a transition on the given layer, false otherwise.
            * @param layerIndex The layer index.
            * @returns True if there is a transition on the given layer, false otherwise. 
            */
            public IsInTransition ($layerIndex: number) : boolean
            /** See AnimatorController.parameters. */
            public GetParameter ($index: number) : UnityEngine.AnimatorControllerParameter
            public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number) : void
            /** Automatically adjust the GameObject position and rotation. * @param matchPosition The position we want the body part to reach.
            * @param matchRotation The rotation in which we want the body part to be.
            * @param targetBodyPart The body part that is involved in the match.
            * @param weightMask Structure that contains weights for matching position and rotation.
            * @param startNormalizedTime Start time within the animation clip (0 - beginning of clip, 1 - end of clip).
            * @param targetNormalizedTime End time within the animation clip (0 - beginning of clip, 1 - end of clip), values greater than 1 can be set to trigger a match after a certain number of loops. Ex: 2.3 means at 30% of 2nd loop.
            * @param completeMatch Allows you to specify what should happen if the MatchTarget function is interrupted. A value of true causes the GameObject to immediately move to the matchPosition if interrupted. A value of false causes the GameObject to stay at its current position if interrupted.
            */
            public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number) : void
            public MatchTarget ($matchPosition: UnityEngine.Vector3, $matchRotation: UnityEngine.Quaternion, $targetBodyPart: UnityEngine.AvatarTarget, $weightMask: UnityEngine.MatchTargetWeightMask, $startNormalizedTime: number, $targetNormalizedTime: number, $completeMatch: boolean) : void
            public InterruptMatchTarget () : void
            /** Interrupts the automatic target matching. */
            public InterruptMatchTarget ($completeMatch: boolean) : void
            public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number) : void
            public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number) : void
            public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number) : void
            /** Creates a crossfade from the current state to any other state using times in seconds. * @param stateName The name of the state.
            * @param stateHashName The hash name of the state.
            * @param fixedTransitionDuration The duration of the transition (in seconds).
            * @param layer The layer where the crossfade occurs.
            * @param fixedTimeOffset The time of the state (in seconds).
            * @param normalizedTransitionTime The time of the transition (normalized).
            */
            public CrossFadeInFixedTime ($stateName: string, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number, $normalizedTransitionTime: number) : void
            public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number) : void
            public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number) : void
            public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number) : void
            /** Creates a crossfade from the current state to any other state using times in seconds. * @param stateName The name of the state.
            * @param stateHashName The hash name of the state.
            * @param fixedTransitionDuration The duration of the transition (in seconds).
            * @param layer The layer where the crossfade occurs.
            * @param fixedTimeOffset The time of the state (in seconds).
            * @param normalizedTransitionTime The time of the transition (normalized).
            */
            public CrossFadeInFixedTime ($stateHashName: number, $fixedTransitionDuration: number, $layer: number, $fixedTimeOffset: number, $normalizedTransitionTime: number) : void
            public WriteDefaultValues () : void
            public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number) : void
            public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number) : void
            public CrossFade ($stateName: string, $normalizedTransitionDuration: number) : void
            /** Creates a crossfade from the current state to any other state using normalized times. * @param stateName The name of the state.
            * @param stateHashName The hash name of the state.
            * @param normalizedTransitionDuration The duration of the transition (normalized).
            * @param layer The layer where the crossfade occurs.
            * @param normalizedTimeOffset The time of the state (normalized).
            * @param normalizedTransitionTime The time of the transition (normalized).
            */
            public CrossFade ($stateName: string, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number, $normalizedTransitionTime: number) : void
            /** Creates a crossfade from the current state to any other state using normalized times. * @param stateName The name of the state.
            * @param stateHashName The hash name of the state.
            * @param normalizedTransitionDuration The duration of the transition (normalized).
            * @param layer The layer where the crossfade occurs.
            * @param normalizedTimeOffset The time of the state (normalized).
            * @param normalizedTransitionTime The time of the transition (normalized).
            */
            public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number, $normalizedTransitionTime: number) : void
            public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number, $normalizedTimeOffset: number) : void
            public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number, $layer: number) : void
            public CrossFade ($stateHashName: number, $normalizedTransitionDuration: number) : void
            public PlayInFixedTime ($stateName: string, $layer: number) : void
            public PlayInFixedTime ($stateName: string) : void
            /** Plays a state. * @param stateName The state name.
            * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
            * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
            * @param fixedTime The time offset (in seconds).
            */
            public PlayInFixedTime ($stateName: string, $layer: number, $fixedTime: number) : void
            /** Plays a state. * @param stateName The state name.
            * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
            * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
            * @param fixedTime The time offset (in seconds).
            */
            public PlayInFixedTime ($stateNameHash: number, $layer: number, $fixedTime: number) : void
            public PlayInFixedTime ($stateNameHash: number, $layer: number) : void
            public PlayInFixedTime ($stateNameHash: number) : void
            public Play ($stateName: string, $layer: number) : void
            public Play ($stateName: string) : void
            /** Plays a state. * @param stateName The state name.
            * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
            * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
            * @param normalizedTime The time offset between zero and one.
            */
            public Play ($stateName: string, $layer: number, $normalizedTime: number) : void
            /** Plays a state. * @param stateName The state name.
            * @param stateNameHash The state hash name. If stateNameHash is 0, it changes the current state time.
            * @param layer The layer index. If layer is -1, it plays the first state with the given state name or hash.
            * @param normalizedTime The time offset between zero and one.
            */
            public Play ($stateNameHash: number, $layer: number, $normalizedTime: number) : void
            public Play ($stateNameHash: number, $layer: number) : void
            public Play ($stateNameHash: number) : void
            /** Sets an AvatarTarget and a targetNormalizedTime for the current state. * @param targetIndex The avatar body part that is queried.
            * @param targetNormalizedTime The current state Time that is queried.
            */
            public SetTarget ($targetIndex: UnityEngine.AvatarTarget, $targetNormalizedTime: number) : void
            /** Returns Transform mapped to this human bone id. * @param humanBoneId The human bone that is queried, see enum HumanBodyBones for a list of possible values.
            */
            public GetBoneTransform ($humanBoneId: UnityEngine.HumanBodyBones) : UnityEngine.Transform
            public StartPlayback () : void
            public StopPlayback () : void
            /** Sets the animator in recording mode, and allocates a circular buffer of size frameCount. * @param frameCount The number of frames (updates) that will be recorded. If frameCount is 0, the recording will continue until the user calls StopRecording. The maximum value for frameCount is 10000.
            */
            public StartRecording ($frameCount: number) : void
            public StopRecording () : void
            /** Returns true if the state exists in this layer, false otherwise.
            * @param layerIndex The layer index.
            * @param stateID The state ID.
            * @returns True if the state exists in this layer, false otherwise. 
            */
            public HasState ($layerIndex: number, $stateID: number) : boolean
            /** Generates an parameter id from a string. * @param name The string to convert to Id.
            */
            public static StringToHash ($name: string) : number
            /** Evaluates the animator based on deltaTime. * @param deltaTime The time delta.
            */
            public Update ($deltaTime: number) : void
            public Rebind () : void
            public ApplyBuiltinRootMotion () : void
            public constructor ()
        }
        /** Information about what animation clips is played and its weight. */
        class AnimationInfo extends System.ValueType
        {
        }
        /** The update mode of the Animator. */
        enum AnimatorUpdateMode
        { Normal = 0, AnimatePhysics = 1, UnscaledTime = 2 }
        /** IK Goal. */
        enum AvatarIKGoal
        { LeftFoot = 0, RightFoot = 1, LeftHand = 2, RightHand = 3 }
        /** IK Hint. */
        enum AvatarIKHint
        { LeftKnee = 0, RightKnee = 1, LeftElbow = 2, RightElbow = 3 }
        /** Human Body Bones. */
        enum HumanBodyBones
        { Hips = 0, LeftUpperLeg = 1, RightUpperLeg = 2, LeftLowerLeg = 3, RightLowerLeg = 4, LeftFoot = 5, RightFoot = 6, Spine = 7, Chest = 8, UpperChest = 54, Neck = 9, Head = 10, LeftShoulder = 11, RightShoulder = 12, LeftUpperArm = 13, RightUpperArm = 14, LeftLowerArm = 15, RightLowerArm = 16, LeftHand = 17, RightHand = 18, LeftToes = 19, RightToes = 20, LeftEye = 21, RightEye = 22, Jaw = 23, LeftThumbProximal = 24, LeftThumbIntermediate = 25, LeftThumbDistal = 26, LeftIndexProximal = 27, LeftIndexIntermediate = 28, LeftIndexDistal = 29, LeftMiddleProximal = 30, LeftMiddleIntermediate = 31, LeftMiddleDistal = 32, LeftRingProximal = 33, LeftRingIntermediate = 34, LeftRingDistal = 35, LeftLittleProximal = 36, LeftLittleIntermediate = 37, LeftLittleDistal = 38, RightThumbProximal = 39, RightThumbIntermediate = 40, RightThumbDistal = 41, RightIndexProximal = 42, RightIndexIntermediate = 43, RightIndexDistal = 44, RightMiddleProximal = 45, RightMiddleIntermediate = 46, RightMiddleDistal = 47, RightRingProximal = 48, RightRingIntermediate = 49, RightRingDistal = 50, RightLittleProximal = 51, RightLittleIntermediate = 52, RightLittleDistal = 53, LastBone = 55 }
        /** StateMachineBehaviour is a component that can be added to a state machine state. It's the base class every script on a state derives from. */
        class StateMachineBehaviour extends UnityEngine.ScriptableObject
        {
        }
        /** A class you can derive from if you want to create objects that don't need to be attached to game objects. */
        class ScriptableObject extends UnityEngine.Object
        {
        }
        /** Information about the current or next state. */
        class AnimatorStateInfo extends System.ValueType
        {
        }
        /** Information about the current transition. */
        class AnimatorTransitionInfo extends System.ValueType
        {
        }
        /** Information about clip being played and blended by the Animator. */
        class AnimatorClipInfo extends System.ValueType
        {
        }
        /** Used to communicate between scripting and the controller. Some parameters can be set in scripting and used by the controller, while other parameters are based on Custom Curves in Animation Clips and can be sampled using the scripting API. */
        class AnimatorControllerParameter extends System.Object
        {
        }
        /** Target. */
        enum AvatarTarget
        { Root = 0, Body = 1, LeftFoot = 2, RightFoot = 3, LeftHand = 4, RightHand = 5 }
        /** Use this struct to specify the position and rotation weight mask for Animator.MatchTarget. */
        class MatchTargetWeightMask extends System.ValueType
        {
        }
        /** Culling mode for the Animator. */
        enum AnimatorCullingMode
        { AlwaysAnimate = 0, CullUpdateTransforms = 1, CullCompletely = 2, BasedOnRenderers = 1 }
        /** The mode of the Animator's recorder. */
        enum AnimatorRecorderMode
        { Offline = 0, Playback = 1, Record = 2 }
        /** The runtime representation of the AnimatorController. Use this representation to change the Animator Controller during runtime. */
        class RuntimeAnimatorController extends UnityEngine.Object
        {
        }
        /** Avatar definition. */
        class Avatar extends UnityEngine.Object
        {
        }
        /** A single keyframe that can be injected into an animation curve. */
        class Keyframe extends System.ValueType
        {
        }
        /** Physics material describes how to handle colliding objects (friction, bounciness). */
        class PhysicMaterial extends UnityEngine.Object
        {
        }
        /** Describes a collision. */
        class Collision extends System.Object
        {
        /** The relative linear velocity of the two colliding objects (Read Only). */
            public get relativeVelocity(): UnityEngine.Vector3;
            /** The Rigidbody we hit (Read Only). This is null if the object we hit is a collider with no rigidbody attached. */
            public get rigidbody(): UnityEngine.Rigidbody;
            /** The ArticulationBody of the collider that your GameObject collides with (Read Only). */
            public get articulationBody(): UnityEngine.ArticulationBody;
            /** The Rigidbody or ArticulationBody of the collider that your Component collides with (Read Only). */
            public get body(): UnityEngine.Component;
            /** The Collider we hit (Read Only). */
            public get collider(): UnityEngine.Collider;
            /** The Transform of the object we hit (Read Only). */
            public get transform(): UnityEngine.Transform;
            /** The GameObject whose collider you are colliding with. (Read Only). */
            public get gameObject(): UnityEngine.GameObject;
            /** Gets the number of contacts for this collision. */
            public get contactCount(): number;
            /** The contact points generated by the physics engine. You should avoid using this as it produces memory garbage. Use GetContact or GetContacts instead. */
            public get contacts(): System.Array$1<UnityEngine.ContactPoint>;
            /** The total impulse applied to this contact pair to resolve the collision. */
            public get impulse(): UnityEngine.Vector3;
            /** Gets the contact point at the specified index.
            * @param index The index of the contact to retrieve.
            * @returns The contact at the specified index. 
            */
            public GetContact ($index: number) : UnityEngine.ContactPoint
            /** Retrieves all contact points for this collision.
            * @param contacts An array of ContactPoint used to receive the results.
            * @returns Returns the number of contacts placed in the contacts array. 
            */
            public GetContacts ($contacts: System.Array$1<UnityEngine.ContactPoint>) : number
            public GetContacts ($contacts: System.Collections.Generic.List$1<UnityEngine.ContactPoint>) : number
            public constructor ()
        }
        /** Describes a contact point where the collision occurs. */
        class ContactPoint extends System.ValueType
        {
        }
        /** Use these flags to constrain motion of Rigidbodies. */
        enum RigidbodyConstraints
        { None = 0, FreezePositionX = 2, FreezePositionY = 4, FreezePositionZ = 8, FreezeRotationX = 16, FreezeRotationY = 32, FreezeRotationZ = 64, FreezePosition = 14, FreezeRotation = 112, FreezeAll = 126 }
        /** The collision detection mode constants used for Rigidbody.collisionDetectionMode. */
        enum CollisionDetectionMode
        { Discrete = 0, Continuous = 1, ContinuousDynamic = 2, ContinuousSpeculative = 3 }
        /** Rigidbody interpolation mode. */
        enum RigidbodyInterpolation
        { None = 0, Interpolate = 1, Extrapolate = 2 }
        /** Use ForceMode to specify how to apply a force using Rigidbody.AddForce. */
        enum ForceMode
        { Force = 0, Acceleration = 5, Impulse = 1, VelocityChange = 2 }
        /** Overrides the global Physics.queriesHitTriggers. */
        enum QueryTriggerInteraction
        { UseGlobal = 0, Ignore = 1, Collide = 2 }
        /** Provides access to display information. */
        class Screen extends System.Object
        {
        /** The current width of the screen window in pixels (Read Only). */
            public static get width(): number;
            /** The current height of the screen window in pixels (Read Only). */
            public static get height(): number;
            /** The current DPI of the screen / device (Read Only). */
            public static get dpi(): number;
            /** The current screen resolution (Read Only). */
            public static get currentResolution(): UnityEngine.Resolution;
            /** Returns all full-screen resolutions that the monitor supports (Read Only). */
            public static get resolutions(): System.Array$1<UnityEngine.Resolution>;
            /** Enables full-screen mode for the application. */
            public static get fullScreen(): boolean;
            public static set fullScreen(value: boolean);
            /** Set this property to one of the values in FullScreenMode to change the display mode of your application. */
            public static get fullScreenMode(): UnityEngine.FullScreenMode;
            public static set fullScreenMode(value: UnityEngine.FullScreenMode);
            /** Returns the safe area of the screen in pixels (Read Only). */
            public static get safeArea(): UnityEngine.Rect;
            /** Returns a list of screen areas that are not functional for displaying content (Read Only). */
            public static get cutouts(): System.Array$1<UnityEngine.Rect>;
            /** Enables auto-rotation to portrait. */
            public static get autorotateToPortrait(): boolean;
            public static set autorotateToPortrait(value: boolean);
            /** Enables auto-rotation to portrait, upside down. */
            public static get autorotateToPortraitUpsideDown(): boolean;
            public static set autorotateToPortraitUpsideDown(value: boolean);
            /** Enables auto-rotation to landscape left */
            public static get autorotateToLandscapeLeft(): boolean;
            public static set autorotateToLandscapeLeft(value: boolean);
            /** Enables auto-rotation to landscape right. */
            public static get autorotateToLandscapeRight(): boolean;
            public static set autorotateToLandscapeRight(value: boolean);
            /** Specifies logical orientation of the screen. */
            public static get orientation(): UnityEngine.ScreenOrientation;
            public static set orientation(value: UnityEngine.ScreenOrientation);
            /** A power saving setting, allowing the screen to dim some time after the last active user interaction. */
            public static get sleepTimeout(): number;
            public static set sleepTimeout(value: number);
            /** The current brightness of the screen. */
            public static get brightness(): number;
            public static set brightness(value: number);
            /** Switches the screen resolution. */
            public static SetResolution ($width: number, $height: number, $fullscreenMode: UnityEngine.FullScreenMode, $preferredRefreshRate: number) : void
            /** Switches the screen resolution. */
            public static SetResolution ($width: number, $height: number, $fullscreenMode: UnityEngine.FullScreenMode) : void
            /** Switches the screen resolution. */
            public static SetResolution ($width: number, $height: number, $fullscreen: boolean, $preferredRefreshRate: number) : void
            /** Switches the screen resolution. */
            public static SetResolution ($width: number, $height: number, $fullscreen: boolean) : void
            public constructor ()
        }
        /** Represents a display resolution. */
        class Resolution extends System.ValueType
        {
        }
        /** Platform agnostic fullscreen mode. Not all platforms support all modes. */
        enum FullScreenMode
        { ExclusiveFullScreen = 0, FullScreenWindow = 1, MaximizedWindow = 2, Windowed = 3 }
        /** Describes screen orientation. */
        enum ScreenOrientation
        { Unknown = 0, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, AutoRotation = 5, Landscape = 3 }
        /** Base class for Texture handling. */
        class Texture extends UnityEngine.Object
        {
        /** Can be used with Texture constructors that take a mip count to indicate that all mips should be generated.  The value of this field is -1. */
            public static GenerateAllMips : number
            public static get masterTextureLimit(): number;
            public static set masterTextureLimit(value: number);
            /** How many mipmap levels are in this Texture (Read Only). */
            public get mipmapCount(): number;
            public static get anisotropicFiltering(): UnityEngine.AnisotropicFiltering;
            public static set anisotropicFiltering(value: UnityEngine.AnisotropicFiltering);
            /** Returns the GraphicsFormat format or color format of a Texture object. */
            public get graphicsFormat(): UnityEngine.Experimental.Rendering.GraphicsFormat;
            /** Width of the Texture in pixels. (Read Only) */
            public get width(): number;
            public set width(value: number);
            /** Height of the Texture in pixels. (Read Only) */
            public get height(): number;
            public set height(value: number);
            /** Dimensionality (type) of the Texture (Read Only). */
            public get dimension(): UnityEngine.Rendering.TextureDimension;
            public set dimension(value: UnityEngine.Rendering.TextureDimension);
            /** Whether Unity stores an additional copy of this texture's pixel data in CPU-addressable memory. */
            public get isReadable(): boolean;
            /** Texture coordinate wrapping mode. */
            public get wrapMode(): UnityEngine.TextureWrapMode;
            public set wrapMode(value: UnityEngine.TextureWrapMode);
            /** Texture U coordinate wrapping mode. */
            public get wrapModeU(): UnityEngine.TextureWrapMode;
            public set wrapModeU(value: UnityEngine.TextureWrapMode);
            /** Texture V coordinate wrapping mode. */
            public get wrapModeV(): UnityEngine.TextureWrapMode;
            public set wrapModeV(value: UnityEngine.TextureWrapMode);
            /** Texture W coordinate wrapping mode for Texture3D. */
            public get wrapModeW(): UnityEngine.TextureWrapMode;
            public set wrapModeW(value: UnityEngine.TextureWrapMode);
            /** Filtering mode of the Texture. */
            public get filterMode(): UnityEngine.FilterMode;
            public set filterMode(value: UnityEngine.FilterMode);
            /** Defines the anisotropic filtering level of the Texture. */
            public get anisoLevel(): number;
            public set anisoLevel(value: number);
            /** The mipmap bias of the Texture. */
            public get mipMapBias(): number;
            public set mipMapBias(value: number);
            public get texelSize(): UnityEngine.Vector2;
            /** This counter is incremented when the Texture is updated. */
            public get updateCount(): number;
            /** The hash value of the Texture. */
            public get imageContentsHash(): UnityEngine.Hash128;
            public set imageContentsHash(value: UnityEngine.Hash128);
            /** The total amount of Texture memory that Unity would use if it loads all Textures at mipmap level 0.
            This is a theoretical value that does not take into account any input from the streaming system or any other input, for example when you set the`Texture2D.requestedMipmapLevel` manually.
            To see a Texture memory value that takes inputs into account, use `desiredTextureMemory`.
            `totalTextureMemory` only includes instances of Texture2D and CubeMap Textures. It does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally. */
            public static get totalTextureMemory(): bigint;
            /** The total size of the Textures, in bytes, that Unity loads if there were no other constraints. Before Unity loads any Textures, it applies the which reduces the loaded Texture resolution if the Texture sizes exceed its value. The `desiredTextureMemory` value takes into account the mipmap levels that Unity has requested or that you have set manually.
            For example, if Unity does not load a Texture at full resolution because it is far away or its requested mipmap level is greater than 0,  Unity reduces the `desiredTextureMemory` value to match the total memory needed.
            The `desiredTextureMemory` value can be greater than the `targetTextureMemory` value.
            */
            public static get desiredTextureMemory(): bigint;
            /** The total amount of Texture memory that Unity allocates to the Textures in the scene after it applies the and finishes loading Textures. `targetTextureMemory`also takes mipmap streaming settings into account. This value only includes instances of Texture2D and CubeMap Textures. It does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally. */
            public static get targetTextureMemory(): bigint;
            /** The amount of memory that all Textures in the scene use. */
            public static get currentTextureMemory(): bigint;
            /** The amount of memory Unity allocates for non-streaming Textures in the scene. This only includes instances of Texture2D and CubeMap Textures. This does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally. */
            public static get nonStreamingTextureMemory(): bigint;
            /** How many times has a Texture been uploaded due to Texture mipmap streaming. */
            public static get streamingMipmapUploadCount(): bigint;
            /** Number of renderers registered with the Texture streaming system. */
            public static get streamingRendererCount(): bigint;
            /** Number of streaming Textures. */
            public static get streamingTextureCount(): bigint;
            /** The number of non-streaming Textures in the scene. This includes instances of Texture2D and CubeMap Textures. This does not include any other Texture types, or 2D and CubeMap Textures that Unity creates internally. */
            public static get nonStreamingTextureCount(): bigint;
            /** Number of streaming Textures with outstanding mipmaps to be loaded. */
            public static get streamingTexturePendingLoadCount(): bigint;
            /** Number of streaming Textures with mipmaps currently loading. */
            public static get streamingTextureLoadingCount(): bigint;
            /** Force streaming Textures to load all mipmap levels. */
            public static get streamingTextureForceLoadAll(): boolean;
            public static set streamingTextureForceLoadAll(value: boolean);
            /** This property forces the streaming Texture system to discard all unused mipmaps instead of caching them until the Texture is exceeded. This is useful when you profile or write tests to keep a predictable set of Textures in memory. */
            public static get streamingTextureDiscardUnusedMips(): boolean;
            public static set streamingTextureDiscardUnusedMips(value: boolean);
            /** Allow Unity internals to perform Texture creation on any thread (rather than the dedicated render thread). */
            public static get allowThreadedTextureCreation(): boolean;
            public static set allowThreadedTextureCreation(value: boolean);
            /** Sets Anisotropic limits. */
            public static SetGlobalAnisotropicFilteringLimits ($forcedMin: number, $globalMax: number) : void
            public GetNativeTexturePtr () : System.IntPtr
            public IncrementUpdateCount () : void
            public static SetStreamingTextureMaterialDebugProperties () : void
        }
        /** Anisotropic filtering mode. */
        enum AnisotropicFiltering
        { Disable = 0, Enable = 1, ForceEnable = 2 }
        /** Wrap mode for textures. */
        enum TextureWrapMode
        { Repeat = 0, Clamp = 1, Mirror = 2, MirrorOnce = 3 }
        /** Filtering mode for textures. Corresponds to the settings in a. */
        enum FilterMode
        { Point = 0, Bilinear = 1, Trilinear = 2 }
        /** Represents  a 128-bit hash value. */
        class Hash128 extends System.ValueType implements System.IComparable, System.IComparable$1<UnityEngine.Hash128>, System.IEquatable$1<UnityEngine.Hash128>
        {
        }
        /** Text file assets. */
        class TextAsset extends UnityEngine.Object
        {
        /** The raw bytes of the text asset. (Read Only) */
            public get bytes(): System.Array$1<number>;
            /** The text contents of the file as a string. (Read Only) */
            public get text(): string;
            public constructor ()
            public constructor ($text: string)
        }
        /** Access system and hardware information. */
        class SystemInfo extends System.Object
        {
        /** Value returned by SystemInfo string properties which are not supported on the current platform. */
            public static unsupportedIdentifier : string/** The current battery level (Read Only). */
            public static get batteryLevel(): number;
            /** Returns the current status of the device's battery (Read Only). */
            public static get batteryStatus(): UnityEngine.BatteryStatus;
            /** Operating system name with version (Read Only). */
            public static get operatingSystem(): string;
            /** Returns the operating system family the game is running on (Read Only). */
            public static get operatingSystemFamily(): UnityEngine.OperatingSystemFamily;
            /** Processor name (Read Only). */
            public static get processorType(): string;
            /** Processor frequency in MHz (Read Only). */
            public static get processorFrequency(): number;
            /** Number of processors present (Read Only). */
            public static get processorCount(): number;
            /** Amount of system memory present (Read Only). */
            public static get systemMemorySize(): number;
            /** A unique device identifier. It is guaranteed to be unique for every device (Read Only). */
            public static get deviceUniqueIdentifier(): string;
            /** The user defined name of the device (Read Only). */
            public static get deviceName(): string;
            /** The model of the device (Read Only). */
            public static get deviceModel(): string;
            /** Is an accelerometer available on the device? */
            public static get supportsAccelerometer(): boolean;
            /** Is a gyroscope available on the device? */
            public static get supportsGyroscope(): boolean;
            /** Is the device capable of reporting its location? */
            public static get supportsLocationService(): boolean;
            /** Is the device capable of providing the user haptic feedback by vibration? */
            public static get supportsVibration(): boolean;
            /** Is there an Audio device available for playback? (Read Only) */
            public static get supportsAudio(): boolean;
            /** Returns the kind of device the application is running on (Read Only). */
            public static get deviceType(): UnityEngine.DeviceType;
            /** Amount of video memory present (Read Only). */
            public static get graphicsMemorySize(): number;
            /** The name of the graphics device (Read Only). */
            public static get graphicsDeviceName(): string;
            /** The vendor of the graphics device (Read Only). */
            public static get graphicsDeviceVendor(): string;
            /** The identifier code of the graphics device (Read Only). */
            public static get graphicsDeviceID(): number;
            /** The identifier code of the graphics device vendor (Read Only). */
            public static get graphicsDeviceVendorID(): number;
            /** The graphics API type used by the graphics device (Read Only). */
            public static get graphicsDeviceType(): UnityEngine.Rendering.GraphicsDeviceType;
            /** Returns true if the texture UV coordinate convention for this platform has Y starting at the top of the image. */
            public static get graphicsUVStartsAtTop(): boolean;
            /** The graphics API type and driver version used by the graphics device (Read Only). */
            public static get graphicsDeviceVersion(): string;
            /** Graphics device shader capability level (Read Only). */
            public static get graphicsShaderLevel(): number;
            /** Is graphics device using multi-threaded rendering (Read Only)? */
            public static get graphicsMultiThreaded(): boolean;
            /** Application's actual rendering threading mode (Read Only). */
            public static get renderingThreadingMode(): UnityEngine.Rendering.RenderingThreadingMode;
            /** True if the GPU supports hidden surface removal. */
            public static get hasHiddenSurfaceRemovalOnGPU(): boolean;
            /** Returns true when the GPU has native support for indexing uniform arrays in fragment shaders without restrictions. */
            public static get hasDynamicUniformArrayIndexingInFragmentShaders(): boolean;
            /** Are built-in shadows supported? (Read Only) */
            public static get supportsShadows(): boolean;
            /** Is sampling raw depth from shadowmaps supported? (Read Only) */
            public static get supportsRawShadowDepthSampling(): boolean;
            /** Whether motion vectors are supported on this platform. */
            public static get supportsMotionVectors(): boolean;
            /** Are 3D (volume) textures supported? (Read Only) */
            public static get supports3DTextures(): boolean;
            /** Are compressed formats for 3D (volume) textures supported? (Read Only). */
            public static get supportsCompressed3DTextures(): boolean;
            /** Are 2D Array textures supported? (Read Only) */
            public static get supports2DArrayTextures(): boolean;
            /** Are 3D (volume) RenderTextures supported? (Read Only) */
            public static get supports3DRenderTextures(): boolean;
            /** Are Cubemap Array textures supported? (Read Only) */
            public static get supportsCubemapArrayTextures(): boolean;
            /** Support for various Graphics.CopyTexture cases (Read Only). */
            public static get copyTextureSupport(): UnityEngine.Rendering.CopyTextureSupport;
            /** Are compute shaders supported? (Read Only) */
            public static get supportsComputeShaders(): boolean;
            /** Is conservative rasterization supported? (Read Only) */
            public static get supportsConservativeRaster(): boolean;
            /** Boolean that indicates whether Multiview is supported (true if supported, false if not supported). (Read Only) */
            public static get supportsMultiview(): boolean;
            /** Are geometry shaders supported? (Read Only) */
            public static get supportsGeometryShaders(): boolean;
            /** Are tessellation shaders supported? (Read Only) */
            public static get supportsTessellationShaders(): boolean;
            /** Boolean that indicates if SV_RenderTargetArrayIndex can be used in a vertex shader (true if it can be used, false if not). */
            public static get supportsRenderTargetArrayIndexFromVertexShader(): boolean;
            /** Is GPU draw call instancing supported? (Read Only) */
            public static get supportsInstancing(): boolean;
            /** Does the hardware support quad topology? (Read Only) */
            public static get supportsHardwareQuadTopology(): boolean;
            /** Are 32-bit index buffers supported? (Read Only) */
            public static get supports32bitsIndexBuffer(): boolean;
            /** Are sparse textures supported? (Read Only) */
            public static get supportsSparseTextures(): boolean;
            /** How many simultaneous render targets (MRTs) are supported? (Read Only) */
            public static get supportedRenderTargetCount(): number;
            /** Returns true when the platform supports different blend modes when rendering to multiple render targets, or false otherwise. */
            public static get supportsSeparatedRenderTargetsBlend(): boolean;
            /** The maximum number of random write targets (UAV) that Unity supports simultaneously. (Read Only) */
            public static get supportedRandomWriteTargetCount(): number;
            /** Are multisampled textures supported? (Read Only) */
            public static get supportsMultisampledTextures(): number;
            /** Boolean that indicates whether multisampled texture arrays are supported (true if supported, false if not supported). */
            public static get supportsMultisampled2DArrayTextures(): boolean;
            /** Returns true if multisampled textures are resolved automatically */
            public static get supportsMultisampleAutoResolve(): boolean;
            /** Returns true if the 'Mirror Once' texture wrap mode is supported. (Read Only) */
            public static get supportsTextureWrapMirrorOnce(): number;
            /** This property is true if the current platform uses a reversed depth buffer (where values range from 1 at the near plane and 0 at far plane), and false if the depth buffer is normal (0 is near, 1 is far). (Read Only) */
            public static get usesReversedZBuffer(): boolean;
            /** What NPOT (non-power of two size) texture support does the GPU provide? (Read Only) */
            public static get npotSupport(): UnityEngine.NPOTSupport;
            /** Maximum texture size (Read Only). */
            public static get maxTextureSize(): number;
            /** Maximum Cubemap texture size (Read Only). */
            public static get maxCubemapSize(): number;
            /** Determines how many compute buffers Unity supports simultaneously in a vertex shader for reading. (Read Only) */
            public static get maxComputeBufferInputsVertex(): number;
            /** Determines how many compute buffers Unity supports simultaneously in a fragment shader for reading. (Read Only) */
            public static get maxComputeBufferInputsFragment(): number;
            /** Determines how many compute buffers Unity supports simultaneously in a geometry shader for reading. (Read Only) */
            public static get maxComputeBufferInputsGeometry(): number;
            /** Determines how many compute buffers Unity supports simultaneously in a domain shader for reading. (Read Only) */
            public static get maxComputeBufferInputsDomain(): number;
            /** Determines how many compute buffers Unity supports simultaneously in a hull shader for reading. (Read Only) */
            public static get maxComputeBufferInputsHull(): number;
            /** Determines how many compute buffers Unity supports simultaneously in a compute shader for reading. (Read Only) */
            public static get maxComputeBufferInputsCompute(): number;
            /** The largest total number of invocations in a single local work group that can be dispatched to a compute shader (Read Only). */
            public static get maxComputeWorkGroupSize(): number;
            /** The maximum number of work groups that a compute shader can use in X dimension (Read Only). */
            public static get maxComputeWorkGroupSizeX(): number;
            /** The maximum number of work groups that a compute shader can use in Y dimension (Read Only). */
            public static get maxComputeWorkGroupSizeY(): number;
            /** The maximum number of work groups that a compute shader can use in Z dimension (Read Only). */
            public static get maxComputeWorkGroupSizeZ(): number;
            /** Returns true when the platform supports asynchronous compute queues and false if otherwise. */
            public static get supportsAsyncCompute(): boolean;
            /** Specifies whether the current platform supports the GPU Recorder or not. (Read Only). */
            public static get supportsGpuRecorder(): boolean;
            /** Returns true when the platform supports GraphicsFences, and false if otherwise. */
            public static get supportsGraphicsFence(): boolean;
            /** Returns true if asynchronous readback of GPU data is available for this device and false otherwise. */
            public static get supportsAsyncGPUReadback(): boolean;
            /** Checks if ray tracing is supported by the current configuration. */
            public static get supportsRayTracing(): boolean;
            /** Does the current renderer support binding constant buffers directly? (Read Only) */
            public static get supportsSetConstantBuffer(): boolean;
            /** Minimum buffer offset (in bytes) when binding a constant buffer using Shader.SetConstantBuffer or Material.SetConstantBuffer. */
            public static get constantBufferOffsetAlignment(): number;
            /** Returns true if the GPU supports partial mipmap chains (Read Only). */
            public static get hasMipMaxLevel(): boolean;
            /** Is streaming of texture mip maps supported? (Read Only) */
            public static get supportsMipStreaming(): boolean;
            /** True if the Graphics API takes RenderBufferLoadAction and RenderBufferStoreAction into account, false if otherwise. */
            public static get usesLoadStoreActions(): boolean;
            /** Returns a bitwise combination of HDRDisplaySupportFlags describing the support for HDR displays on the system. */
            public static get hdrDisplaySupportFlags(): UnityEngine.HDRDisplaySupportFlags;
            /** This property is true if the graphics API of the target build platform takes RenderBufferStoreAction.StoreAndResolve into account, false if otherwise. */
            public static get supportsStoreAndResolveAction(): boolean;
            /** Is render texture format supported?
            * @param format The format to look up.
            * @returns True if the format is supported. 
            */
            public static SupportsRenderTextureFormat ($format: UnityEngine.RenderTextureFormat) : boolean
            /** Is blending supported on render texture format?
            * @param format The format to look up.
            * @returns True if blending is supported on the given format. 
            */
            public static SupportsBlendingOnRenderTextureFormat ($format: UnityEngine.RenderTextureFormat) : boolean
            /** Is texture format supported on this device?
            * @param format The TextureFormat format to look up.
            * @returns True if the format is supported. 
            */
            public static SupportsTextureFormat ($format: UnityEngine.TextureFormat) : boolean
            /** Indicates whether the given combination of a vertex attribute format and dimension is supported on this device.
            * @param format The VertexAttributeFormat format to look up.
            * @param dimension The dimension of vertex data to check for.
            * @returns True if the format with the given dimension is supported. 
            */
            public static SupportsVertexAttributeFormat ($format: UnityEngine.Rendering.VertexAttributeFormat, $dimension: number) : boolean
            public static IsFormatSupported ($format: UnityEngine.Experimental.Rendering.GraphicsFormat, $usage: UnityEngine.Experimental.Rendering.FormatUsage) : boolean
            public static GetCompatibleFormat ($format: UnityEngine.Experimental.Rendering.GraphicsFormat, $usage: UnityEngine.Experimental.Rendering.FormatUsage) : UnityEngine.Experimental.Rendering.GraphicsFormat
            /** Returns the platform-specific GraphicsFormat that is associated with the DefaultFormat. * @param format The DefaultFormat format to look up.
            */
            public static GetGraphicsFormat ($format: UnityEngine.Experimental.Rendering.DefaultFormat) : UnityEngine.Experimental.Rendering.GraphicsFormat
            /** Checks if the target platform supports the MSAA samples count in the RenderTextureDescriptor argument.
            * @param desc The RenderTextureDescriptor to check.
            * @returns If the target platform supports the given MSAA samples count of RenderTextureDescriptor, returns the given MSAA samples count. Otherwise returns a lower fallback MSAA samples count value that the target platform supports. 
            */
            public static GetRenderTextureSupportedMSAASampleCount ($desc: UnityEngine.RenderTextureDescriptor) : number
            public constructor ()
        }
        /** Enumeration for SystemInfo.batteryStatus which represents the current status of the device's battery. */
        enum BatteryStatus
        { Unknown = 0, Charging = 1, Discharging = 2, NotCharging = 3, Full = 4 }
        /** Enumeration for SystemInfo.operatingSystemFamily. */
        enum OperatingSystemFamily
        { Other = 0, MacOSX = 1, Windows = 2, Linux = 3 }
        /** Enumeration for SystemInfo.deviceType, denotes a coarse grouping of kinds of devices. */
        enum DeviceType
        { Unknown = 0, Handheld = 1, Console = 2, Desktop = 3 }
        /** Format of a RenderTexture. */
        enum RenderTextureFormat
        { ARGB32 = 0, Depth = 1, ARGBHalf = 2, Shadowmap = 3, RGB565 = 4, ARGB4444 = 5, ARGB1555 = 6, Default = 7, ARGB2101010 = 8, DefaultHDR = 9, ARGB64 = 10, ARGBFloat = 11, RGFloat = 12, RGHalf = 13, RFloat = 14, RHalf = 15, R8 = 16, ARGBInt = 17, RGInt = 18, RInt = 19, BGRA32 = 20, RGB111110Float = 22, RG32 = 23, RGBAUShort = 24, RG16 = 25, BGRA10101010_XR = 26, BGR101010_XR = 27, R16 = 28 }
        /** Format used when creating textures from scripts. */
        enum TextureFormat
        { Alpha8 = 1, ARGB4444 = 2, RGB24 = 3, RGBA32 = 4, ARGB32 = 5, RGB565 = 7, R16 = 9, DXT1 = 10, DXT5 = 12, RGBA4444 = 13, BGRA32 = 14, RHalf = 15, RGHalf = 16, RGBAHalf = 17, RFloat = 18, RGFloat = 19, RGBAFloat = 20, YUY2 = 21, RGB9e5Float = 22, BC4 = 26, BC5 = 27, BC6H = 24, BC7 = 25, DXT1Crunched = 28, DXT5Crunched = 29, PVRTC_RGB2 = 30, PVRTC_RGBA2 = 31, PVRTC_RGB4 = 32, PVRTC_RGBA4 = 33, ETC_RGB4 = 34, ATC_RGB4 = -127, ATC_RGBA8 = -127, EAC_R = 41, EAC_R_SIGNED = 42, EAC_RG = 43, EAC_RG_SIGNED = 44, ETC2_RGB = 45, ETC2_RGBA1 = 46, ETC2_RGBA8 = 47, ASTC_4x4 = 48, ASTC_5x5 = 49, ASTC_6x6 = 50, ASTC_8x8 = 51, ASTC_10x10 = 52, ASTC_12x12 = 53, ETC_RGB4_3DS = 60, ETC_RGBA8_3DS = 61, RG16 = 62, R8 = 63, ETC_RGB4Crunched = 64, ETC2_RGBA8Crunched = 65, ASTC_HDR_4x4 = 66, ASTC_HDR_5x5 = 67, ASTC_HDR_6x6 = 68, ASTC_HDR_8x8 = 69, ASTC_HDR_10x10 = 70, ASTC_HDR_12x12 = 71, RG32 = 72, RGB48 = 73, RGBA64 = 74, ASTC_RGB_4x4 = 48, ASTC_RGB_5x5 = 49, ASTC_RGB_6x6 = 50, ASTC_RGB_8x8 = 51, ASTC_RGB_10x10 = 52, ASTC_RGB_12x12 = 53, ASTC_RGBA_4x4 = 54, ASTC_RGBA_5x5 = 55, ASTC_RGBA_6x6 = 56, ASTC_RGBA_8x8 = 57, ASTC_RGBA_10x10 = 58, ASTC_RGBA_12x12 = 59, PVRTC_2BPP_RGB = -127, PVRTC_2BPP_RGBA = -127, PVRTC_4BPP_RGB = -127, PVRTC_4BPP_RGBA = -127 }
        /** NPOT Texture2D|textures support. */
        enum NPOTSupport
        { None = 0, Restricted = 1, Full = 2 }
        /** A set of flags that describe the level of HDR display support available on the system. */
        enum HDRDisplaySupportFlags
        { None = 0, Supported = 1, RuntimeSwitchable = 2, AutomaticTonemapping = 4 }
        /** This struct contains all the information required to create a RenderTexture. It can be copied, cached, and reused to easily create RenderTextures that all share the same properties. Avoid using the default constructor as it does not initialize some flags with the recommended values. */
        class RenderTextureDescriptor extends System.ValueType
        {
        }
        /** Interface into the Input system. */
        class Input extends System.Object
        {
        /** Enables/Disables mouse simulation with touches. By default this option is enabled. */
            public static get simulateMouseWithTouches(): boolean;
            public static set simulateMouseWithTouches(value: boolean);
            /** Is any key or mouse button currently held down? (Read Only) */
            public static get anyKey(): boolean;
            /** Returns true the first frame the user hits any key or mouse button. (Read Only) */
            public static get anyKeyDown(): boolean;
            /** Returns the keyboard input entered this frame. (Read Only) */
            public static get inputString(): string;
            /** The current mouse position in pixel coordinates. (Read Only). */
            public static get mousePosition(): UnityEngine.Vector3;
            /** The current mouse scroll delta. (Read Only) */
            public static get mouseScrollDelta(): UnityEngine.Vector2;
            /** Controls enabling and disabling of IME input composition. */
            public static get imeCompositionMode(): UnityEngine.IMECompositionMode;
            public static set imeCompositionMode(value: UnityEngine.IMECompositionMode);
            /** The current IME composition string being typed by the user. */
            public static get compositionString(): string;
            /** Does the user have an IME keyboard input source selected? */
            public static get imeIsSelected(): boolean;
            /** The current text input position used by IMEs to open windows. */
            public static get compositionCursorPos(): UnityEngine.Vector2;
            public static set compositionCursorPos(value: UnityEngine.Vector2);
            /** Indicates if a mouse device is detected. */
            public static get mousePresent(): boolean;
            /** Number of touches. Guaranteed not to change throughout the frame. (Read Only) */
            public static get touchCount(): number;
            /** Bool value which let's users check if touch pressure is supported. */
            public static get touchPressureSupported(): boolean;
            /** Returns true when Stylus Touch is supported by a device or platform. */
            public static get stylusTouchSupported(): boolean;
            /** Returns whether the device on which application is currently running supports touch input. */
            public static get touchSupported(): boolean;
            /** Property indicating whether the system handles multiple touches. */
            public static get multiTouchEnabled(): boolean;
            public static set multiTouchEnabled(value: boolean);
            /** Device physical orientation as reported by OS. (Read Only) */
            public static get deviceOrientation(): UnityEngine.DeviceOrientation;
            /** Last measured linear acceleration of a device in three-dimensional space. (Read Only) */
            public static get acceleration(): UnityEngine.Vector3;
            /** This property controls if input sensors should be compensated for screen orientation. */
            public static get compensateSensors(): boolean;
            public static set compensateSensors(value: boolean);
            /** Number of acceleration measurements which occurred during last frame. */
            public static get accelerationEventCount(): number;
            /** Should  Back button quit the application?
            Only usable on Android, Windows Phone or Windows Tablets. */
            public static get backButtonLeavesApp(): boolean;
            public static set backButtonLeavesApp(value: boolean);
            /** Property for accessing device location (handheld devices only). (Read Only) */
            public static get location(): UnityEngine.LocationService;
            /** Property for accessing compass (handheld devices only). (Read Only) */
            public static get compass(): UnityEngine.Compass;
            /** Returns default gyroscope. */
            public static get gyro(): UnityEngine.Gyroscope;
            /** Returns list of objects representing status of all touches during last frame. (Read Only) (Allocates temporary variables). */
            public static get touches(): System.Array$1<UnityEngine.Touch>;
            /** Returns list of acceleration measurements which occurred during the last frame. (Read Only) (Allocates temporary variables). */
            public static get accelerationEvents(): System.Array$1<UnityEngine.AccelerationEvent>;
            /** Returns the value of the virtual axis identified by axisName. */
            public static GetAxis ($axisName: string) : number
            /** Returns the value of the virtual axis identified by axisName with no smoothing filtering applied. */
            public static GetAxisRaw ($axisName: string) : number
            /** Returns true while the virtual button identified by buttonName is held down.
            * @param buttonName The name of the button such as Jump.
            * @returns True when an axis has been pressed and not released. 
            */
            public static GetButton ($buttonName: string) : boolean
            /** Returns true during the frame the user pressed down the virtual button identified by buttonName. */
            public static GetButtonDown ($buttonName: string) : boolean
            /** Returns true the first frame the user releases the virtual button identified by buttonName. */
            public static GetButtonUp ($buttonName: string) : boolean
            /** Returns whether the given mouse button is held down. */
            public static GetMouseButton ($button: number) : boolean
            /** Returns true during the frame the user pressed the given mouse button. */
            public static GetMouseButtonDown ($button: number) : boolean
            /** Returns true during the frame the user releases the given mouse button. */
            public static GetMouseButtonUp ($button: number) : boolean
            public static ResetInputAxes () : void
            /** Determine whether a particular joystick model has been preconfigured by Unity. (Linux-only).
            * @param joystickName The name of the joystick to check (returned by Input.GetJoystickNames).
            * @returns True if the joystick layout has been preconfigured; false otherwise. 
            */
            public static IsJoystickPreconfigured ($joystickName: string) : boolean
            public static GetJoystickNames () : System.Array$1<string>
            /** Call Input.GetTouch to obtain a Touch struct.
            * @param index The touch input on the device screen.
            * @returns Touch details in the struct. 
            */
            public static GetTouch ($index: number) : UnityEngine.Touch
            /** Returns specific acceleration measurement which occurred during last frame. (Does not allocate temporary variables). */
            public static GetAccelerationEvent ($index: number) : UnityEngine.AccelerationEvent
            /** Returns true while the user holds down the key identified by the key KeyCode enum parameter. */
            public static GetKey ($key: UnityEngine.KeyCode) : boolean
            /** Returns true while the user holds down the key identified by name. */
            public static GetKey ($name: string) : boolean
            /** Returns true during the frame the user releases the key identified by the key KeyCode enum parameter. */
            public static GetKeyUp ($key: UnityEngine.KeyCode) : boolean
            /** Returns true during the frame the user releases the key identified by name. */
            public static GetKeyUp ($name: string) : boolean
            /** Returns true during the frame the user starts pressing down the key identified by the key KeyCode enum parameter. */
            public static GetKeyDown ($key: UnityEngine.KeyCode) : boolean
            /** Returns true during the frame the user starts pressing down the key identified by name. */
            public static GetKeyDown ($name: string) : boolean
            public constructor ()
        }
        /** Structure describing the status of a finger touching the screen. */
        class Touch extends System.ValueType
        {
        }
        /** Structure describing acceleration status of the device. */
        class AccelerationEvent extends System.ValueType
        {
        }
        /** Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard. */
        enum KeyCode
        { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
        /** Controls IME input. */
        enum IMECompositionMode
        { Auto = 0, On = 1, Off = 2 }
        /** Describes physical orientation of the device as determined by the OS. */
        enum DeviceOrientation
        { Unknown = 0, Portrait = 1, PortraitUpsideDown = 2, LandscapeLeft = 3, LandscapeRight = 4, FaceUp = 5, FaceDown = 6 }
        /** Provides methods that allow an application to access the device's location. */
        class LocationService extends System.Object
        {
        }
        /** Interface into compass functionality. */
        class Compass extends System.Object
        {
        }
        /** Interface into the Gyroscope. */
        class Gyroscope extends System.Object
        {
        }
        /** A collection of common math functions. */
        class Mathf extends System.ValueType
        {
        /** The well-known 3.14159265358979... value (Read Only). */
            public static PI : number/** A representation of positive infinity (Read Only). */
            public static Infinity : number/** A representation of negative infinity (Read Only). */
            public static NegativeInfinity : number/** Degrees-to-radians conversion constant (Read Only). */
            public static Deg2Rad : number/** Radians-to-degrees conversion constant (Read Only). */
            public static Rad2Deg : number/** A tiny floating point value (Read Only). */
            public static Epsilon : number/** Returns the closest power of two value. */
            public static ClosestPowerOfTwo ($value: number) : number
            /** Returns true if the value is power of two. */
            public static IsPowerOfTwo ($value: number) : boolean
            /** Returns the next power of two that is equal to, or greater than, the argument. */
            public static NextPowerOfTwo ($value: number) : number
            /** Converts the given value from gamma (sRGB) to linear color space. */
            public static GammaToLinearSpace ($value: number) : number
            /** Converts the given value from linear to gamma (sRGB) color space. */
            public static LinearToGammaSpace ($value: number) : number
            /** Convert a color temperature in Kelvin to RGB color.
            * @param kelvin Temperature in Kelvin. Range 1000 to 40000 Kelvin.
            * @returns Correlated Color Temperature as floating point RGB color. 
            */
            public static CorrelatedColorTemperatureToRGB ($kelvin: number) : UnityEngine.Color
            /** Encode a floating point value into a 16-bit representation.
            * @param val The floating point value to convert.
            * @returns The converted half-precision float, stored in a 16-bit unsigned integer. 
            */
            public static FloatToHalf ($val: number) : number
            /** Convert a half precision float to a 32-bit floating point value.
            * @param val The half precision value to convert.
            * @returns The decoded 32-bit float. 
            */
            public static HalfToFloat ($val: number) : number
            /** Generate 2D Perlin noise.
            * @param x X-coordinate of sample point.
            * @param y Y-coordinate of sample point.
            * @returns Value between 0.0 and 1.0. (Return value might be slightly below 0.0 or beyond 1.0.) 
            */
            public static PerlinNoise ($x: number, $y: number) : number
            /** Returns the sine of angle f.
            * @param f The input angle, in radians.
            * @returns The return value between -1 and +1. 
            */
            public static Sin ($f: number) : number
            /** Returns the cosine of angle f.
            * @param f The input angle, in radians.
            * @returns The return value between -1 and 1. 
            */
            public static Cos ($f: number) : number
            /** Returns the tangent of angle f in radians. */
            public static Tan ($f: number) : number
            /** Returns the arc-sine of f - the angle in radians whose sine is f. */
            public static Asin ($f: number) : number
            /** Returns the arc-cosine of f - the angle in radians whose cosine is f. */
            public static Acos ($f: number) : number
            /** Returns the arc-tangent of f - the angle in radians whose tangent is f. */
            public static Atan ($f: number) : number
            /** Returns the angle in radians whose Tan is y/x. */
            public static Atan2 ($y: number, $x: number) : number
            /** Returns square root of f. */
            public static Sqrt ($f: number) : number
            /** Returns the absolute value of f. */
            public static Abs ($f: number) : number
            /** Returns the absolute value of value. */
            public static Abs ($value: number) : number
            /** Returns the smallest of two or more values. */
            public static Min ($a: number, $b: number) : number
            /** Returns the smallest of two or more values. */
            public static Min (...values: number[]) : number
            /** Returns largest of two or more values. */
            public static Max ($a: number, $b: number) : number
            /** Returns largest of two or more values. */
            public static Max (...values: number[]) : number
            /** Returns f raised to power p. */
            public static Pow ($f: number, $p: number) : number
            /** Returns e raised to the specified power. */
            public static Exp ($power: number) : number
            /** Returns the logarithm of a specified number in a specified base. */
            public static Log ($f: number, $p: number) : number
            /** Returns the natural (base e) logarithm of a specified number. */
            public static Log ($f: number) : number
            /** Returns the base 10 logarithm of a specified number. */
            public static Log10 ($f: number) : number
            /** Returns the smallest integer greater to or equal to f. */
            public static Ceil ($f: number) : number
            /** Returns the largest integer smaller than or equal to f. */
            public static Floor ($f: number) : number
            /** Returns f rounded to the nearest integer. */
            public static Round ($f: number) : number
            /** Returns the smallest integer greater to or equal to f. */
            public static CeilToInt ($f: number) : number
            /** Returns the largest integer smaller to or equal to f. */
            public static FloorToInt ($f: number) : number
            /** Returns f rounded to the nearest integer. */
            public static RoundToInt ($f: number) : number
            /** Returns the sign of f. */
            public static Sign ($f: number) : number
            /** Clamps the given value between the given minimum float and maximum float values.  Returns the given value if it is within the min and max range.
            * @param value The floating point value to restrict inside the range defined by the min and max values.
            * @param min The minimum floating point value to compare against.
            * @param max The maximum floating point value to compare against.
            * @returns The float result between the min and max values. 
            */
            public static Clamp ($value: number, $min: number, $max: number) : number
            /** Clamps value between 0 and 1 and returns value. */
            public static Clamp01 ($value: number) : number
            /** Linearly interpolates between a and b by t.
            * @param a The start value.
            * @param b The end value.
            * @param t The interpolation value between the two floats.
            * @returns The interpolated float result between the two float values. 
            */
            public static Lerp ($a: number, $b: number, $t: number) : number
            /** Linearly interpolates between a and b by t with no limit to t.
            * @param a The start value.
            * @param b The end value.
            * @param t The interpolation between the two floats.
            * @returns The float value as a result from the linear interpolation. 
            */
            public static LerpUnclamped ($a: number, $b: number, $t: number) : number
            /** Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees. */
            public static LerpAngle ($a: number, $b: number, $t: number) : number
            /** Moves a value current towards target. * @param current The current value.
            * @param target The value to move towards.
            * @param maxDelta The maximum change that should be applied to the value.
            */
            public static MoveTowards ($current: number, $target: number, $maxDelta: number) : number
            /** Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees. */
            public static MoveTowardsAngle ($current: number, $target: number, $maxDelta: number) : number
            /** Interpolates between min and max with smoothing at the limits. */
            public static SmoothStep ($from: number, $to: number, $t: number) : number
            public static Gamma ($value: number, $absmax: number, $gamma: number) : number
            /** Compares two floating point values and returns true if they are similar. */
            public static Approximately ($a: number, $b: number) : boolean
            /** Gradually changes a value towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number) : number
            /** Gradually changes a value towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number) : number
            /** Gradually changes a value towards a desired goal over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time. * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : number
            /** Loops the value t, so that it is never larger than length and never smaller than 0. */
            public static Repeat ($t: number, $length: number) : number
            /** PingPong returns a value that will increment and decrement between the value 0 and length. */
            public static PingPong ($t: number, $length: number) : number
            /** Calculates the linear parameter t that produces the interpolant value within the range [a, b].
            * @param a Start value.
            * @param b End value.
            * @param value Value between start and end.
            * @returns Percentage of value between start and end. 
            */
            public static InverseLerp ($a: number, $b: number, $value: number) : number
            /** Calculates the shortest difference between two given angles given in degrees. */
            public static DeltaAngle ($current: number, $target: number) : number
        }
        /** A Camera is a device through which the player views the world. */
        class Camera extends UnityEngine.Behaviour
        {
        /** Delegate that you can use to execute custom code before a Camera culls the scene. */
            public static onPreCull : UnityEngine.Camera.CameraCallback/** Delegate that you can use to execute custom code before a Camera renders the scene. */
            public static onPreRender : UnityEngine.Camera.CameraCallback/** Delegate that you can use to execute custom code after a Camera renders the scene. */
            public static onPostRender : UnityEngine.Camera.CameraCallback/** The distance of the near clipping plane from the the Camera, in world units. */
            public get nearClipPlane(): number;
            public set nearClipPlane(value: number);
            /** The distance of the far clipping plane from the Camera, in world units. */
            public get farClipPlane(): number;
            public set farClipPlane(value: number);
            /** The field of view of the camera in degrees. */
            public get fieldOfView(): number;
            public set fieldOfView(value: number);
            /** The rendering path that should be used, if possible. */
            public get renderingPath(): UnityEngine.RenderingPath;
            public set renderingPath(value: UnityEngine.RenderingPath);
            /** The rendering path that is currently being used (Read Only). */
            public get actualRenderingPath(): UnityEngine.RenderingPath;
            /** High dynamic range rendering. */
            public get allowHDR(): boolean;
            public set allowHDR(value: boolean);
            /** MSAA rendering. */
            public get allowMSAA(): boolean;
            public set allowMSAA(value: boolean);
            /** Dynamic Resolution Scaling. */
            public get allowDynamicResolution(): boolean;
            public set allowDynamicResolution(value: boolean);
            /** Should camera rendering be forced into a RenderTexture. */
            public get forceIntoRenderTexture(): boolean;
            public set forceIntoRenderTexture(value: boolean);
            /** Camera's half-size when in orthographic mode. */
            public get orthographicSize(): number;
            public set orthographicSize(value: number);
            /** Is the camera orthographic (true) or perspective (false)? */
            public get orthographic(): boolean;
            public set orthographic(value: boolean);
            /** Opaque object sorting mode. */
            public get opaqueSortMode(): UnityEngine.Rendering.OpaqueSortMode;
            public set opaqueSortMode(value: UnityEngine.Rendering.OpaqueSortMode);
            /** Transparent object sorting mode. */
            public get transparencySortMode(): UnityEngine.TransparencySortMode;
            public set transparencySortMode(value: UnityEngine.TransparencySortMode);
            /** An axis that describes the direction along which the distances of objects are measured for the purpose of sorting. */
            public get transparencySortAxis(): UnityEngine.Vector3;
            public set transparencySortAxis(value: UnityEngine.Vector3);
            /** Camera's depth in the camera rendering order. */
            public get depth(): number;
            public set depth(value: number);
            /** The aspect ratio (width divided by height). */
            public get aspect(): number;
            public set aspect(value: number);
            /** Get the world-space speed of the camera (Read Only). */
            public get velocity(): UnityEngine.Vector3;
            /** This is used to render parts of the Scene selectively. */
            public get cullingMask(): number;
            public set cullingMask(value: number);
            /** Mask to select which layers can trigger events on the camera. */
            public get eventMask(): number;
            public set eventMask(value: number);
            /** How to perform per-layer culling for a Camera. */
            public get layerCullSpherical(): boolean;
            public set layerCullSpherical(value: boolean);
            /** Identifies what kind of camera this is, using the CameraType enum. */
            public get cameraType(): UnityEngine.CameraType;
            public set cameraType(value: UnityEngine.CameraType);
            /** Sets the culling maks used to determine which objects from which Scenes to draw.
            See EditorSceneManager.SetSceneCullingMask. */
            public get overrideSceneCullingMask(): bigint;
            public set overrideSceneCullingMask(value: bigint);
            /** Per-layer culling distances. */
            public get layerCullDistances(): System.Array$1<number>;
            public set layerCullDistances(value: System.Array$1<number>);
            /** Whether or not the Camera will use occlusion culling during rendering. */
            public get useOcclusionCulling(): boolean;
            public set useOcclusionCulling(value: boolean);
            /** Sets a custom matrix for the camera to use for all culling queries. */
            public get cullingMatrix(): UnityEngine.Matrix4x4;
            public set cullingMatrix(value: UnityEngine.Matrix4x4);
            /** The color with which the screen will be cleared. */
            public get backgroundColor(): UnityEngine.Color;
            public set backgroundColor(value: UnityEngine.Color);
            /** How the camera clears the background. */
            public get clearFlags(): UnityEngine.CameraClearFlags;
            public set clearFlags(value: UnityEngine.CameraClearFlags);
            /** How and if camera generates a depth texture. */
            public get depthTextureMode(): UnityEngine.DepthTextureMode;
            public set depthTextureMode(value: UnityEngine.DepthTextureMode);
            /** Should the camera clear the stencil buffer after the deferred light pass? */
            public get clearStencilAfterLightingPass(): boolean;
            public set clearStencilAfterLightingPass(value: boolean);
            /** Enable [UsePhysicalProperties] to use physical camera properties to compute the field of view and the frustum. */
            public get usePhysicalProperties(): boolean;
            public set usePhysicalProperties(value: boolean);
            /** The size of the camera sensor, expressed in millimeters. */
            public get sensorSize(): UnityEngine.Vector2;
            public set sensorSize(value: UnityEngine.Vector2);
            /** The lens offset of the camera. The lens shift is relative to the sensor size. For example, a lens shift of 0.5 offsets the sensor by half its horizontal size. */
            public get lensShift(): UnityEngine.Vector2;
            public set lensShift(value: UnityEngine.Vector2);
            /** The camera focal length, expressed in millimeters. To use this property, enable UsePhysicalProperties. */
            public get focalLength(): number;
            public set focalLength(value: number);
            /** There are two gates for a camera, the sensor gate and the resolution gate. The physical camera sensor gate is defined by the sensorSize property, the resolution gate is defined by the render target area. */
            public get gateFit(): UnityEngine.Camera.GateFitMode;
            public set gateFit(value: UnityEngine.Camera.GateFitMode);
            /** Where on the screen is the camera rendered in normalized coordinates. */
            public get rect(): UnityEngine.Rect;
            public set rect(value: UnityEngine.Rect);
            /** Where on the screen is the camera rendered in pixel coordinates. */
            public get pixelRect(): UnityEngine.Rect;
            public set pixelRect(value: UnityEngine.Rect);
            /** How wide is the camera in pixels (not accounting for dynamic resolution scaling) (Read Only). */
            public get pixelWidth(): number;
            /** How tall is the camera in pixels (not accounting for dynamic resolution scaling) (Read Only). */
            public get pixelHeight(): number;
            /** How wide is the camera in pixels (accounting for dynamic resolution scaling) (Read Only). */
            public get scaledPixelWidth(): number;
            /** How tall is the camera in pixels (accounting for dynamic resolution scaling) (Read Only). */
            public get scaledPixelHeight(): number;
            /** Destination render texture. */
            public get targetTexture(): UnityEngine.RenderTexture;
            public set targetTexture(value: UnityEngine.RenderTexture);
            /** Gets the temporary RenderTexture target for this Camera. */
            public get activeTexture(): UnityEngine.RenderTexture;
            /** Set the target display for this Camera. */
            public get targetDisplay(): number;
            public set targetDisplay(value: number);
            /** Matrix that transforms from camera space to world space (Read Only). */
            public get cameraToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms from world to camera space. */
            public get worldToCameraMatrix(): UnityEngine.Matrix4x4;
            public set worldToCameraMatrix(value: UnityEngine.Matrix4x4);
            /** Set a custom projection matrix. */
            public get projectionMatrix(): UnityEngine.Matrix4x4;
            public set projectionMatrix(value: UnityEngine.Matrix4x4);
            /** Get or set the raw projection matrix with no camera offset (no jittering). */
            public get nonJitteredProjectionMatrix(): UnityEngine.Matrix4x4;
            public set nonJitteredProjectionMatrix(value: UnityEngine.Matrix4x4);
            /** Should the jittered matrix be used for transparency rendering? */
            public get useJitteredProjectionMatrixForTransparentRendering(): boolean;
            public set useJitteredProjectionMatrixForTransparentRendering(value: boolean);
            /** Get the view projection matrix used on the last frame. */
            public get previousViewProjectionMatrix(): UnityEngine.Matrix4x4;
            /** The first enabled Camera component that is tagged "MainCamera" (Read Only). */
            public static get main(): UnityEngine.Camera;
            /** The camera we are currently rendering with, for low-level render control only (Read Only). */
            public static get current(): UnityEngine.Camera;
            /** If not null, the camera will only render the contents of the specified Scene. */
            public get scene(): UnityEngine.SceneManagement.Scene;
            public set scene(value: UnityEngine.SceneManagement.Scene);
            /** Stereoscopic rendering. */
            public get stereoEnabled(): boolean;
            /** The distance between the virtual eyes. Use this to query or set the current eye separation. Note that most VR devices provide this value, in which case setting the value will have no effect. */
            public get stereoSeparation(): number;
            public set stereoSeparation(value: number);
            /** Distance to a point where virtual eyes converge. */
            public get stereoConvergence(): number;
            public set stereoConvergence(value: number);
            /** Determines whether the stereo view matrices are suitable to allow for a single pass cull. */
            public get areVRStereoViewMatricesWithinSingleCullTolerance(): boolean;
            /** Defines which eye of a VR display the Camera renders into. */
            public get stereoTargetEye(): UnityEngine.StereoTargetEyeMask;
            public set stereoTargetEye(value: UnityEngine.StereoTargetEyeMask);
            /** Returns the eye that is currently rendering.
            If called when stereo is not enabled it will return Camera.MonoOrStereoscopicEye.Mono.
            If called during a camera rendering callback such as OnRenderImage it will return the currently rendering eye.
            If called outside of a rendering callback and stereo is enabled, it will return the default eye which is Camera.MonoOrStereoscopicEye.Left. */
            public get stereoActiveEye(): UnityEngine.Camera.MonoOrStereoscopicEye;
            /** The number of cameras in the current Scene. */
            public static get allCamerasCount(): number;
            /** Returns all enabled cameras in the Scene. */
            public static get allCameras(): System.Array$1<UnityEngine.Camera>;
            /** Number of command buffers set up on this camera (Read Only). */
            public get commandBufferCount(): number;
            public Reset () : void
            public ResetTransparencySortSettings () : void
            public ResetAspect () : void
            public ResetCullingMatrix () : void
            /** Make the camera render with shader replacement. */
            public SetReplacementShader ($shader: UnityEngine.Shader, $replacementTag: string) : void
            public ResetReplacementShader () : void
            public GetGateFittedFieldOfView () : number
            public GetGateFittedLensShift () : UnityEngine.Vector2
            /** Sets the Camera to render to the chosen buffers of one or more RenderTextures. * @param colorBuffer The RenderBuffer(s) to which color information will be rendered.
            * @param depthBuffer The RenderBuffer to which depth information will be rendered.
            */
            public SetTargetBuffers ($colorBuffer: UnityEngine.RenderBuffer, $depthBuffer: UnityEngine.RenderBuffer) : void
            /** Sets the Camera to render to the chosen buffers of one or more RenderTextures. * @param colorBuffer The RenderBuffer(s) to which color information will be rendered.
            * @param depthBuffer The RenderBuffer to which depth information will be rendered.
            */
            public SetTargetBuffers ($colorBuffer: System.Array$1<UnityEngine.RenderBuffer>, $depthBuffer: UnityEngine.RenderBuffer) : void
            public ResetWorldToCameraMatrix () : void
            public ResetProjectionMatrix () : void
            /** Calculates and returns oblique near-plane projection matrix.
            * @param clipPlane Vector4 that describes a clip plane.
            * @returns Oblique near-plane projection matrix. 
            */
            public CalculateObliqueMatrix ($clipPlane: UnityEngine.Vector4) : UnityEngine.Matrix4x4
            public WorldToScreenPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            public WorldToViewportPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            public ViewportToWorldPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            public ScreenToWorldPoint ($position: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Vector3
            /** Transforms position from world space into screen space. * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public WorldToScreenPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from world space into viewport space. * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public WorldToViewportPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from viewport space into world space.
            * @param position The 3d vector in Viewport space.
            * @returns The 3d vector in World space. 
            */
            public ViewportToWorldPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms a point from screen space into world space, where world space is defined as the coordinate system at the very top of your game's hierarchy.
            * @param position A screen space position (often mouse x, y), plus a z position for depth (for example, a camera clipping plane).
            * @param eye By default, Camera.MonoOrStereoscopicEye.Mono. Can be set to Camera.MonoOrStereoscopicEye.Left or Camera.MonoOrStereoscopicEye.Right for use in stereoscopic rendering (e.g., for VR).
            * @returns The worldspace point created by converting the screen space point at the provided distance z from the camera plane. 
            */
            public ScreenToWorldPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from screen space into viewport space. */
            public ScreenToViewportPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms position from viewport space into screen space. */
            public ViewportToScreenPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            public ViewportPointToRay ($pos: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Ray
            /** Returns a ray going from camera through a viewport point. * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public ViewportPointToRay ($pos: UnityEngine.Vector3) : UnityEngine.Ray
            public ScreenPointToRay ($pos: UnityEngine.Vector3, $eye: UnityEngine.Camera.MonoOrStereoscopicEye) : UnityEngine.Ray
            /** Returns a ray going from camera through a screen point. * @param eye Optional argument that can be used to specify which eye transform to use. Default is Mono.
            */
            public ScreenPointToRay ($pos: UnityEngine.Vector3) : UnityEngine.Ray
            public CalculateFrustumCorners ($viewport: UnityEngine.Rect, $z: number, $eye: UnityEngine.Camera.MonoOrStereoscopicEye, $outCorners: System.Array$1<UnityEngine.Vector3>) : void
            public static CalculateProjectionMatrixFromPhysicalProperties ($output: $Ref<UnityEngine.Matrix4x4>, $focalLength: number, $sensorSize: UnityEngine.Vector2, $lensShift: UnityEngine.Vector2, $nearClip: number, $farClip: number, $gateFitParameters?: UnityEngine.Camera.GateFitParameters) : void
            /** Converts focal length to field of view.
            * @param focalLength Focal length in millimeters.
            * @param sensorSize Sensor size in millimeters. Use the sensor height to get the vertical field of view. Use the sensor width to get the horizontal field of view.
            * @returns field of view in degrees. 
            */
            public static FocalLengthToFieldOfView ($focalLength: number, $sensorSize: number) : number
            /** Converts field of view to focal length. Use either sensor height and vertical field of view or sensor width and horizontal field of view.
            * @param fieldOfView field of view in degrees.
            * @param sensorSize Sensor size in millimeters.
            * @returns Focal length in millimeters. 
            */
            public static FieldOfViewToFocalLength ($fieldOfView: number, $sensorSize: number) : number
            /** Converts the horizontal field of view (FOV) to the vertical FOV, based on the value of the aspect ratio parameter. * @param horizontalFOV The horizontal FOV value in degrees.
            * @param aspectRatio The aspect ratio value used for the conversion
            */
            public static HorizontalToVerticalFieldOfView ($horizontalFieldOfView: number, $aspectRatio: number) : number
            /** Converts the vertical field of view (FOV) to the horizontal FOV, based on the value of the aspect ratio parameter. * @param verticalFieldOfView The vertical FOV value in degrees.
            * @param aspectRatio The aspect ratio value used for the conversion
            */
            public static VerticalToHorizontalFieldOfView ($verticalFieldOfView: number, $aspectRatio: number) : number
            public GetStereoNonJitteredProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
            public GetStereoViewMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
            public CopyStereoDeviceProjectionMatrixToNonJittered ($eye: UnityEngine.Camera.StereoscopicEye) : void
            public GetStereoProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye) : UnityEngine.Matrix4x4
            public SetStereoProjectionMatrix ($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4) : void
            public ResetStereoProjectionMatrices () : void
            public SetStereoViewMatrix ($eye: UnityEngine.Camera.StereoscopicEye, $matrix: UnityEngine.Matrix4x4) : void
            public ResetStereoViewMatrices () : void
            /** Fills an array of Camera with the current cameras in the Scene, without allocating a new array. * @param cameras An array to be filled up with cameras currently in the Scene.
            */
            public static GetAllCameras ($cameras: System.Array$1<UnityEngine.Camera>) : number
            /** Render into a static cubemap from this camera.
            * @param cubemap The cube map to render to.
            * @param faceMask A bitmask which determines which of the six faces are rendered to.
            * @returns False if rendering fails, else true. 
            */
            public RenderToCubemap ($cubemap: UnityEngine.Cubemap, $faceMask: number) : boolean
            public RenderToCubemap ($cubemap: UnityEngine.Cubemap) : boolean
            /** Render into a cubemap from this camera.
            * @param faceMask A bitfield indicating which cubemap faces should be rendered into.
            * @param cubemap The texture to render to.
            * @returns False if rendering fails, else true. 
            */
            public RenderToCubemap ($cubemap: UnityEngine.RenderTexture, $faceMask: number) : boolean
            public RenderToCubemap ($cubemap: UnityEngine.RenderTexture) : boolean
            public RenderToCubemap ($cubemap: UnityEngine.RenderTexture, $faceMask: number, $stereoEye: UnityEngine.Camera.MonoOrStereoscopicEye) : boolean
            public Render () : void
            /** Render the camera with shader replacement. */
            public RenderWithShader ($shader: UnityEngine.Shader, $replacementTag: string) : void
            public RenderDontRestore () : void
            public SubmitRenderRequests ($renderRequests: System.Collections.Generic.List$1<UnityEngine.Camera.RenderRequest>) : void
            public static SetupCurrent ($cur: UnityEngine.Camera) : void
            /** Makes this camera's settings match other camera. * @param other Copy camera settings to the other camera.
            */
            public CopyFrom ($other: UnityEngine.Camera) : void
            /** Remove command buffers from execution at a specified place. * @param evt When to execute the command buffer during rendering.
            */
            public RemoveCommandBuffers ($evt: UnityEngine.Rendering.CameraEvent) : void
            public RemoveAllCommandBuffers () : void
            /** Add a command buffer to be executed at a specified place. * @param evt When to execute the command buffer during rendering.
            * @param buffer The buffer to execute.
            */
            public AddCommandBuffer ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
            /** Adds a command buffer to the GPU's async compute queues and executes that command buffer when graphics processing reaches a given point. * @param evt The point during the graphics processing at which this command buffer should commence on the GPU.
            * @param buffer The buffer to execute.
            * @param queueType The desired async compute queue type to execute the buffer on.
            */
            public AddCommandBufferAsync ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer, $queueType: UnityEngine.Rendering.ComputeQueueType) : void
            /** Remove command buffer from execution at a specified place. * @param evt When to execute the command buffer during rendering.
            * @param buffer The buffer to execute.
            */
            public RemoveCommandBuffer ($evt: UnityEngine.Rendering.CameraEvent, $buffer: UnityEngine.Rendering.CommandBuffer) : void
            /** Get command buffers to be executed at a specified place.
            * @param evt When to execute the command buffer during rendering.
            * @returns Array of command buffers. 
            */
            public GetCommandBuffers ($evt: UnityEngine.Rendering.CameraEvent) : System.Array$1<UnityEngine.Rendering.CommandBuffer>
            /** Get culling parameters for a camera.
            * @param cullingParameters Resultant culling parameters.
            * @param stereoAware Generate single-pass stereo aware culling parameters.
            * @returns Flag indicating whether culling parameters are valid. 
            */
            public TryGetCullingParameters ($cullingParameters: $Ref<UnityEngine.Rendering.ScriptableCullingParameters>) : boolean
            /** Get culling parameters for a camera.
            * @param cullingParameters Resultant culling parameters.
            * @param stereoAware Generate single-pass stereo aware culling parameters.
            * @returns Flag indicating whether culling parameters are valid. 
            */
            public TryGetCullingParameters ($stereoAware: boolean, $cullingParameters: $Ref<UnityEngine.Rendering.ScriptableCullingParameters>) : boolean
            public constructor ()
        }
        /** Rendering path of a Camera. */
        enum RenderingPath
        { UsePlayerSettings = -1, VertexLit = 0, Forward = 1, DeferredLighting = 2, DeferredShading = 3 }
        /** Transparent object sorting mode of a Camera. */
        enum TransparencySortMode
        { Default = 0, Perspective = 1, Orthographic = 2, CustomAxis = 3 }
        /** Describes different types of camera. */
        enum CameraType
        { Game = 1, SceneView = 2, Preview = 4, VR = 8, Reflection = 16 }
        /** Values for Camera.clearFlags, determining what to clear when rendering a Camera. */
        enum CameraClearFlags
        { Skybox = 1, Color = 2, SolidColor = 2, Depth = 3, Nothing = 4 }
        /** Depth texture generation mode for Camera. */
        enum DepthTextureMode
        { None = 0, Depth = 1, DepthNormals = 2, MotionVectors = 4 }
        /** Shader scripts used for all rendering. */
        class Shader extends UnityEngine.Object
        {
        }
        /** Render textures are textures that can be rendered to. */
        class RenderTexture extends UnityEngine.Texture
        {
        }
        /** Color or depth buffer part of a RenderTexture. */
        class RenderBuffer extends System.ValueType
        {
        }
        /** Enum values for the Camera's targetEye property. */
        enum StereoTargetEyeMask
        { None = 0, Left = 1, Right = 2, Both = 3 }
        /** Class for handling cube maps, Use this to create or modify existing. */
        class Cubemap extends UnityEngine.Texture
        {
        }
        /** Script interface for ParticleSystem. Unity's powerful and versatile particle system implementation. */
        class ParticleSystem extends UnityEngine.Component
        {
        /** Determines whether the Particle System is playing. */
            public get isPlaying(): boolean;
            /** Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play. */
            public get isEmitting(): boolean;
            /** Determines whether the Particle System is in the stopped state. */
            public get isStopped(): boolean;
            /** Determines whether the Particle System is paused. */
            public get isPaused(): boolean;
            /** The current number of particles (Read Only). */
            public get particleCount(): number;
            /** Playback position in seconds. */
            public get time(): number;
            public set time(value: number);
            /** Override the random seed used for the Particle System emission. */
            public get randomSeed(): number;
            public set randomSeed(value: number);
            /** Controls whether the Particle System uses an automatically-generated random number to seed the random number generator. */
            public get useAutoRandomSeed(): boolean;
            public set useAutoRandomSeed(value: boolean);
            /** Does this system support Procedural Simulation? */
            public get proceduralSimulationSupported(): boolean;
            /** Access the main Particle System settings. */
            public get main(): UnityEngine.ParticleSystem.MainModule;
            /** Script interface for the EmissionModule of a Particle System. */
            public get emission(): UnityEngine.ParticleSystem.EmissionModule;
            /** Script interface for the ShapeModule of a Particle System.  */
            public get shape(): UnityEngine.ParticleSystem.ShapeModule;
            /** Script interface for the VelocityOverLifetimeModule of a Particle System. */
            public get velocityOverLifetime(): UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
            /** Script interface for the LimitVelocityOverLifetimeModule of a Particle System. . */
            public get limitVelocityOverLifetime(): UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
            /** Script interface for the InheritVelocityModule of a Particle System. */
            public get inheritVelocity(): UnityEngine.ParticleSystem.InheritVelocityModule;
            /** Script interface for the Particle System Lifetime By Emitter Speed module. */
            public get lifetimeByEmitterSpeed(): UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule;
            /** Script interface for the ForceOverLifetimeModule of a Particle System. */
            public get forceOverLifetime(): UnityEngine.ParticleSystem.ForceOverLifetimeModule;
            /** Script interface for the ColorOverLifetimeModule of a Particle System. */
            public get colorOverLifetime(): UnityEngine.ParticleSystem.ColorOverLifetimeModule;
            /** Script interface for the ColorByLifetimeModule of a Particle System. */
            public get colorBySpeed(): UnityEngine.ParticleSystem.ColorBySpeedModule;
            /** Script interface for the SizeOverLifetimeModule of a Particle System.  */
            public get sizeOverLifetime(): UnityEngine.ParticleSystem.SizeOverLifetimeModule;
            /** Script interface for the SizeBySpeedModule of a Particle System. */
            public get sizeBySpeed(): UnityEngine.ParticleSystem.SizeBySpeedModule;
            /** Script interface for the RotationOverLifetimeModule of a Particle System. */
            public get rotationOverLifetime(): UnityEngine.ParticleSystem.RotationOverLifetimeModule;
            /** Script interface for the RotationBySpeedModule of a Particle System. */
            public get rotationBySpeed(): UnityEngine.ParticleSystem.RotationBySpeedModule;
            /** Script interface for the ExternalForcesModule of a Particle System. */
            public get externalForces(): UnityEngine.ParticleSystem.ExternalForcesModule;
            /** Script interface for the NoiseModule of a Particle System. */
            public get noise(): UnityEngine.ParticleSystem.NoiseModule;
            /** Script interface for the CollisionModule of a Particle System. */
            public get collision(): UnityEngine.ParticleSystem.CollisionModule;
            /** Script interface for the TriggerModule of a Particle System. */
            public get trigger(): UnityEngine.ParticleSystem.TriggerModule;
            /** Script interface for the SubEmittersModule of a Particle System. */
            public get subEmitters(): UnityEngine.ParticleSystem.SubEmittersModule;
            /** Script interface for the TextureSheetAnimationModule of a Particle System. */
            public get textureSheetAnimation(): UnityEngine.ParticleSystem.TextureSheetAnimationModule;
            /** Script interface for the LightsModule of a Particle System. */
            public get lights(): UnityEngine.ParticleSystem.LightsModule;
            /** Script interface for the TrailsModule of a Particle System. */
            public get trails(): UnityEngine.ParticleSystem.TrailModule;
            /** Script interface for the CustomDataModule of a Particle System. */
            public get customData(): UnityEngine.ParticleSystem.CustomDataModule;
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : void
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : number
            public SetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : void
            public GetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : number
            public GetPlaybackState () : UnityEngine.ParticleSystem.PlaybackState
            public SetPlaybackState ($playbackState: UnityEngine.ParticleSystem.PlaybackState) : void
            public GetTrails () : UnityEngine.ParticleSystem.Trails
            public SetTrails ($trailData: UnityEngine.ParticleSystem.Trails) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean, $restart: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it. * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number) : void
            /** Starts the Particle System. * @param withChildren Play all child Particle Systems as well.
            */
            public Play ($withChildren: boolean) : void
            public Play () : void
            /** Pauses the system so no new particles are emitted and the existing particles are not updated. * @param withChildren Pause all child Particle Systems as well.
            */
            public Pause ($withChildren: boolean) : void
            public Pause () : void
            /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
            * @param stopBehavior Stop emitting or stop emitting and clear the system.
            */
            public Stop ($withChildren: boolean, $stopBehavior: UnityEngine.ParticleSystemStopBehavior) : void
            /** Stops playing the Particle System using the supplied stop behaviour. * @param withChildren Stop all child Particle Systems as well.
            * @param stopBehavior Stop emitting or stop emitting and clear the system.
            */
            public Stop ($withChildren: boolean) : void
            public Stop () : void
            /** Remove all particles in the Particle System. * @param withChildren Clear all child Particle Systems as well.
            */
            public Clear ($withChildren: boolean) : void
            public Clear () : void
            /** Does the Particle System contain any live particles, or will it produce more?
            * @param withChildren Check all child Particle Systems as well.
            * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead. 
            */
            public IsAlive ($withChildren: boolean) : boolean
            public IsAlive () : boolean
            /** Emit count particles immediately. * @param count Number of particles to emit.
            */
            public Emit ($count: number) : void
            public Emit ($emitParams: UnityEngine.ParticleSystem.EmitParams, $count: number) : void
            /** Triggers the specified sub emitter on all particles of the Particle System. * @param subEmitterIndex Index of the sub emitter to trigger.
            */
            public TriggerSubEmitter ($subEmitterIndex: number) : void
            public TriggerSubEmitter ($subEmitterIndex: number, $particle: $Ref<UnityEngine.ParticleSystem.Particle>) : void
            public TriggerSubEmitter ($subEmitterIndex: number, $particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>) : void
            public static ResetPreMappedBufferMemory () : void
            /** Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems. * @param vertexBuffersCount The maximum number of cached vertex buffers.
            * @param indexBuffersCount The maximum number of cached index buffers.
            */
            public static SetMaximumPreMappedBufferCounts ($vertexBuffersCount: number, $indexBuffersCount: number) : void
            public AllocateAxisOfRotationAttribute () : void
            public AllocateMeshIndexAttribute () : void
            /** Ensures that the ParticleSystemJobs.ParticleSystemJobData.customData1|customData1 and ParticleSystemJobs.ParticleSystemJobData.customData1|customData2 particle attribute arrays are allocated. * @param stream The custom data stream to allocate.
            */
            public AllocateCustomDataAttribute ($stream: UnityEngine.ParticleSystemCustomData) : void
            public constructor ()
        }
        /** Representation of RGBA colors in 32 bit format. */
        class Color32 extends System.ValueType implements System.IFormattable
        {
        }
        /** Which stream of custom particle data to set. */
        enum ParticleSystemCustomData
        { Custom1 = 0, Custom2 = 1 }
        /** The behavior to apply when calling ParticleSystem.Stop|Stop. */
        enum ParticleSystemStopBehavior
        { StopEmittingAndClear = 0, StopEmitting = 1 }
        /** A representation of audio sources in 3D. */
        class AudioSource extends UnityEngine.AudioBehaviour
        {
        /** The volume of the audio source (0.0 to 1.0). */
            public get volume(): number;
            public set volume(value: number);
            /** The pitch of the audio source. */
            public get pitch(): number;
            public set pitch(value: number);
            /** Playback position in seconds. */
            public get time(): number;
            public set time(value: number);
            /** Playback position in PCM samples. */
            public get timeSamples(): number;
            public set timeSamples(value: number);
            /** The default AudioClip to play. */
            public get clip(): UnityEngine.AudioClip;
            public set clip(value: UnityEngine.AudioClip);
            /** The target group to which the AudioSource should route its signal. */
            public get outputAudioMixerGroup(): UnityEngine.Audio.AudioMixerGroup;
            public set outputAudioMixerGroup(value: UnityEngine.Audio.AudioMixerGroup);
            /** Gets or sets the gamepad audio output type for this audio source. */
            public get gamepadSpeakerOutputType(): UnityEngine.GamepadSpeakerOutputType;
            public set gamepadSpeakerOutputType(value: UnityEngine.GamepadSpeakerOutputType);
            /** Is the clip playing right now (Read Only)? */
            public get isPlaying(): boolean;
            /** True if all sounds played by the AudioSource (main sound started by Play() or playOnAwake as well as one-shots) are culled by the audio system. */
            public get isVirtual(): boolean;
            /** Is the audio clip looping? */
            public get loop(): boolean;
            public set loop(value: boolean);
            /** This makes the audio source not take into account the volume of the audio listener. */
            public get ignoreListenerVolume(): boolean;
            public set ignoreListenerVolume(value: boolean);
            /** If set to true, the audio source will automatically start playing on awake. */
            public get playOnAwake(): boolean;
            public set playOnAwake(value: boolean);
            /** Allows AudioSource to play even though AudioListener.pause is set to true. This is useful for the menu element sounds or background music in pause menus. */
            public get ignoreListenerPause(): boolean;
            public set ignoreListenerPause(value: boolean);
            /** Whether the Audio Source should be updated in the fixed or dynamic update. */
            public get velocityUpdateMode(): UnityEngine.AudioVelocityUpdateMode;
            public set velocityUpdateMode(value: UnityEngine.AudioVelocityUpdateMode);
            /** Pans a playing sound in a stereo way (left or right). This only applies to sounds that are Mono or Stereo. */
            public get panStereo(): number;
            public set panStereo(value: number);
            /** Sets how much this AudioSource is affected by 3D spatialisation calculations (attenuation, doppler etc). 0.0 makes the sound full 2D, 1.0 makes it full 3D. */
            public get spatialBlend(): number;
            public set spatialBlend(value: number);
            /** Enables or disables spatialization. */
            public get spatialize(): boolean;
            public set spatialize(value: boolean);
            /** Determines if the spatializer effect is inserted before or after the effect filters. */
            public get spatializePostEffects(): boolean;
            public set spatializePostEffects(value: boolean);
            /** The amount by which the signal from the AudioSource will be mixed into the global reverb associated with the Reverb Zones. */
            public get reverbZoneMix(): number;
            public set reverbZoneMix(value: number);
            /** Bypass effects (Applied from filter components or global listener filters). */
            public get bypassEffects(): boolean;
            public set bypassEffects(value: boolean);
            /** When set global effects on the AudioListener will not be applied to the audio signal generated by the AudioSource. Does not apply if the AudioSource is playing into a mixer group. */
            public get bypassListenerEffects(): boolean;
            public set bypassListenerEffects(value: boolean);
            /** When set doesn't route the signal from an AudioSource into the global reverb associated with reverb zones. */
            public get bypassReverbZones(): boolean;
            public set bypassReverbZones(value: boolean);
            /** Sets the Doppler scale for this AudioSource. */
            public get dopplerLevel(): number;
            public set dopplerLevel(value: number);
            /** Sets the spread angle (in degrees) of a 3d stereo or multichannel sound in speaker space. */
            public get spread(): number;
            public set spread(value: number);
            /** Sets the priority of the AudioSource. */
            public get priority(): number;
            public set priority(value: number);
            /** Un- / Mutes the AudioSource. Mute sets the volume=0, Un-Mute restore the original volume. */
            public get mute(): boolean;
            public set mute(value: boolean);
            /** Within the Min distance the AudioSource will cease to grow louder in volume. */
            public get minDistance(): number;
            public set minDistance(value: number);
            /** (Logarithmic rolloff) MaxDistance is the distance a sound stops attenuating at. */
            public get maxDistance(): number;
            public set maxDistance(value: number);
            /** Sets/Gets how the AudioSource attenuates over distance. */
            public get rolloffMode(): UnityEngine.AudioRolloffMode;
            public set rolloffMode(value: UnityEngine.AudioRolloffMode);
            /** Enable playing of audio source though a specfic gamepad.
            * @param slot Slot number of the gamepad (0-3).
            * @returns Returns TRUE if enabling audio output through this users controller was successful. 
            */
            public PlayOnGamepad ($slot: number) : boolean
            public DisableGamepadOutput () : boolean
            public SetGamepadSpeakerMixLevel ($slot: number, $mixLevel: number) : boolean
            public SetGamepadSpeakerMixLevelDefault ($slot: number) : boolean
            public SetGamepadSpeakerRestrictedAudio ($slot: number, $restricted: boolean) : boolean
            /** Check if the platform supports an audio output type  on gamepads.
            * @param outputType The desired output type.
            * @returns Returns true if the gamepad supports the specified audio output type. 
            */
            public static GamepadSpeakerSupportsOutputType ($outputType: UnityEngine.GamepadSpeakerOutputType) : boolean
            /** Plays the clip. * @param delay Deprecated. Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
            */
            public Play () : void
            /** Plays the clip. * @param delay Deprecated. Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec).
            */
            public Play ($delay: bigint) : void
            /** Plays the clip with a delay specified in seconds. Users are advised to use this function instead of the old Play(delay) function that took a delay specified in samples relative to a reference rate of 44.1 kHz as an argument. * @param delay Delay time specified in seconds.
            */
            public PlayDelayed ($delay: number) : void
            /** Plays the clip at a specific time on the absolute time-line that AudioSettings.dspTime reads from. * @param time Time in seconds on the absolute time-line that AudioSettings.dspTime refers to for when the sound should start playing.
            */
            public PlayScheduled ($time: number) : void
            /** Plays an AudioClip, and scales the AudioSource volume by volumeScale. * @param clip The clip being played.
            * @param volumeScale The scale of the volume (0-1).
            */
            public PlayOneShot ($clip: UnityEngine.AudioClip) : void
            /** Plays an AudioClip, and scales the AudioSource volume by volumeScale. * @param clip The clip being played.
            * @param volumeScale The scale of the volume (0-1).
            */
            public PlayOneShot ($clip: UnityEngine.AudioClip, $volumeScale: number) : void
            /** Changes the time at which a sound that has already been scheduled to play will start. * @param time Time in seconds.
            */
            public SetScheduledStartTime ($time: number) : void
            /** Changes the time at which a sound that has already been scheduled to play will end. Notice that depending on the timing not all rescheduling requests can be fulfilled. * @param time Time in seconds.
            */
            public SetScheduledEndTime ($time: number) : void
            public Stop () : void
            public Pause () : void
            public UnPause () : void
            /** Plays an AudioClip at a given position in world space. * @param clip Audio data to play.
            * @param position Position in world space from which sound originates.
            * @param volume Playback volume.
            */
            public static PlayClipAtPoint ($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3) : void
            /** Plays an AudioClip at a given position in world space. * @param clip Audio data to play.
            * @param position Position in world space from which sound originates.
            * @param volume Playback volume.
            */
            public static PlayClipAtPoint ($clip: UnityEngine.AudioClip, $position: UnityEngine.Vector3, $volume: number) : void
            /** Set the custom curve for the given AudioSourceCurveType. * @param type The curve type that should be set.
            * @param curve The curve that should be applied to the given curve type.
            */
            public SetCustomCurve ($type: UnityEngine.AudioSourceCurveType, $curve: UnityEngine.AnimationCurve) : void
            /** Get the current custom curve for the given AudioSourceCurveType.
            * @param type The curve type to get.
            * @returns The custom AnimationCurve corresponding to the given curve type. 
            */
            public GetCustomCurve ($type: UnityEngine.AudioSourceCurveType) : UnityEngine.AnimationCurve
            /** Provides a block of the currently playing source's output data. * @param samples The array to populate with audio samples. Its length must be a power of 2.
            * @param channel The channel to sample from.
            */
            public GetOutputData ($samples: System.Array$1<number>, $channel: number) : void
            /** Provides a block of the currently playing audio source's spectrum data. * @param samples The array to populate with audio samples. Its length must be a power of 2.
            * @param channel The channel to sample from.
            * @param window The FFTWindow type to use when sampling.
            */
            public GetSpectrumData ($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow) : void
            /** Sets a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
            * @param index Zero-based index of user-defined parameter to be set.
            * @param value New value of the user-defined parameter.
            * @returns True, if the parameter could be set. 
            */
            public SetSpatializerFloat ($index: number, $value: number) : boolean
            /** Reads a user-defined parameter of a custom spatializer effect that is attached to an AudioSource.
            * @param index Zero-based index of user-defined parameter to be read.
            * @param value Return value of the user-defined parameter that is read.
            * @returns True, if the parameter could be read. 
            */
            public GetSpatializerFloat ($index: number, $value: $Ref<number>) : boolean
            /** Reads a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
            * @param index Zero-based index of user-defined parameter to be read.
            * @param value Return value of the user-defined parameter that is read.
            * @returns True, if the parameter could be read. 
            */
            public GetAmbisonicDecoderFloat ($index: number, $value: $Ref<number>) : boolean
            /** Sets a user-defined parameter of a custom ambisonic decoder effect that is attached to an AudioSource.
            * @param index Zero-based index of user-defined parameter to be set.
            * @param value New value of the user-defined parameter.
            * @returns True, if the parameter could be set. 
            */
            public SetAmbisonicDecoderFloat ($index: number, $value: number) : boolean
            public constructor ()
        }
        class AudioBehaviour extends UnityEngine.Behaviour
        {
        }
        /** Gamepad audio output types. */
        enum GamepadSpeakerOutputType
        { Speaker = 0, Vibration = 1 }
        /** Describes when an AudioSource or AudioListener is updated. */
        enum AudioVelocityUpdateMode
        { Auto = 0, Fixed = 1, Dynamic = 2 }
        /** This defines the curve type of the different custom curves that can be queried and set within the AudioSource. */
        enum AudioSourceCurveType
        { CustomRolloff = 0, SpatialBlend = 1, ReverbZoneMix = 2, Spread = 3 }
        /** Rolloff modes that a 3D sound can have in an audio source. */
        enum AudioRolloffMode
        { Logarithmic = 0, Linear = 1, Custom = 2 }
        /** Spectrum analysis windowing types. */
        enum FFTWindow
        { Rectangular = 0, Triangle = 1, Hamming = 2, Hanning = 3, Blackman = 4, BlackmanHarris = 5 }
        /** Representation of a listener in 3D space. */
        class AudioListener extends UnityEngine.AudioBehaviour
        {
        /** Controls the game sound volume (0.0 to 1.0). */
            public static get volume(): number;
            public static set volume(value: number);
            /** The paused state of the audio system. */
            public static get pause(): boolean;
            public static set pause(value: boolean);
            /** This lets you set whether the Audio Listener should be updated in the fixed or dynamic update. */
            public get velocityUpdateMode(): UnityEngine.AudioVelocityUpdateMode;
            public set velocityUpdateMode(value: UnityEngine.AudioVelocityUpdateMode);
            /** Provides a block of the listener (master)'s output data. * @param samples The array to populate with audio samples. Its length must be a power of 2.
            * @param channel The channel to sample from.
            */
            public static GetOutputData ($samples: System.Array$1<number>, $channel: number) : void
            /** Provides a block of the listener (master)'s spectrum data. * @param samples The array to populate with audio samples. Its length must be a power of 2.
            * @param channel The channel to sample from.
            * @param window The FFTWindow type to use when sampling.
            */
            public static GetSpectrumData ($samples: System.Array$1<number>, $channel: number, $window: UnityEngine.FFTWindow) : void
            public constructor ()
        }
        /** Global physics properties and helper methods. */
        class Physics extends System.Object
        {
        /** Layer mask constant to select ignore raycast layer. */
            public static IgnoreRaycastLayer : number/** Layer mask constant to select default raycast layers. */
            public static DefaultRaycastLayers : number/** Layer mask constant to select all layers. */
            public static AllLayers : number/** The gravity applied to all rigid bodies in the Scene. */
            public static get gravity(): UnityEngine.Vector3;
            public static set gravity(value: UnityEngine.Vector3);
            /** The default contact offset of the newly created colliders. */
            public static get defaultContactOffset(): number;
            public static set defaultContactOffset(value: number);
            /** The mass-normalized energy threshold, below which objects start going to sleep. */
            public static get sleepThreshold(): number;
            public static set sleepThreshold(value: number);
            /** Specifies whether queries (raycasts, spherecasts, overlap tests, etc.) hit Triggers by default. */
            public static get queriesHitTriggers(): boolean;
            public static set queriesHitTriggers(value: boolean);
            /** Whether physics queries should hit back-face triangles. */
            public static get queriesHitBackfaces(): boolean;
            public static set queriesHitBackfaces(value: boolean);
            /** Two colliding objects with a relative velocity below this will not bounce (default 2). Must be positive. */
            public static get bounceThreshold(): number;
            public static set bounceThreshold(value: number);
            /** The maximum default velocity needed to move a Rigidbody's collider out of another collider's surface penetration. Must be positive. */
            public static get defaultMaxDepenetrationVelocity(): number;
            public static set defaultMaxDepenetrationVelocity(value: number);
            /** The defaultSolverIterations determines how accurately Rigidbody joints and collision contacts are resolved. (default 6). Must be positive. */
            public static get defaultSolverIterations(): number;
            public static set defaultSolverIterations(value: number);
            /** The defaultSolverVelocityIterations affects how accurately the Rigidbody joints and collision contacts are resolved. (default 1). Must be positive. */
            public static get defaultSolverVelocityIterations(): number;
            public static set defaultSolverVelocityIterations(value: number);
            /** Default maximum angular speed of the dynamic Rigidbody, in radians (default 50). */
            public static get defaultMaxAngularSpeed(): number;
            public static set defaultMaxAngularSpeed(value: number);
            /** The PhysicsScene automatically created when Unity starts. */
            public static get defaultPhysicsScene(): UnityEngine.PhysicsScene;
            /** Sets whether the physics should be simulated automatically or not. */
            public static get autoSimulation(): boolean;
            public static set autoSimulation(value: boolean);
            /** Whether or not to automatically sync transform changes with the physics system whenever a Transform component changes. */
            public static get autoSyncTransforms(): boolean;
            public static set autoSyncTransforms(value: boolean);
            /** Determines whether the garbage collector should reuse only a single instance of a Collision type for all collision callbacks. */
            public static get reuseCollisionCallbacks(): boolean;
            public static set reuseCollisionCallbacks(value: boolean);
            /** Sets the minimum separation distance for cloth inter-collision. */
            public static get interCollisionDistance(): number;
            public static set interCollisionDistance(value: number);
            /** Sets the cloth inter-collision stiffness. */
            public static get interCollisionStiffness(): number;
            public static set interCollisionStiffness(value: number);
            public static get interCollisionSettingsToggle(): boolean;
            public static set interCollisionSettingsToggle(value: boolean);
            /** Cloth Gravity setting.
            Set gravity for all cloth components. */
            public static get clothGravity(): UnityEngine.Vector3;
            public static set clothGravity(value: UnityEngine.Vector3);
            /** Makes the collision detection system ignore all collisions between collider1 and collider2. * @param collider1 Any collider.
            * @param collider2 Another collider you want to have collider1 to start or stop ignoring collisions with.
            * @param ignore Whether or not the collisions between the two colliders should be ignored or not.
            */
            public static IgnoreCollision ($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider, $ignore: boolean) : void
            public static IgnoreCollision ($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider) : void
            /** Makes the collision detection system ignore all collisions between any collider in layer1 and any collider in layer2.
            Note that IgnoreLayerCollision will reset the trigger state of affected colliders, so you might receive OnTriggerExit and OnTriggerEnter messages in response to calling this. */
            public static IgnoreLayerCollision ($layer1: number, $layer2: number, $ignore: boolean) : void
            public static IgnoreLayerCollision ($layer1: number, $layer2: number) : void
            /** Are collisions between layer1 and layer2 being ignored? */
            public static GetIgnoreLayerCollision ($layer1: number, $layer2: number) : boolean
            /** Checks whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not.
            * @param collider1 The first collider to compare to collider2.
            * @param collider2 The second collider to compare to collider1.
            * @returns Whether the collision detection system will ignore all collisionstriggers between collider1 and collider2/ or not. 
            */
            public static GetIgnoreCollision ($collider1: UnityEngine.Collider, $collider2: UnityEngine.Collider) : boolean
            /** Casts a ray, from point origin, in direction direction, of length maxDistance, against all colliders in the Scene.
            * @param origin The starting point of the ray in world coordinates.
            * @param direction The direction of the ray.
            * @param maxDistance The max distance the ray should check for collisions.
            * @param layerMask A that is used to selectively ignore Colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true if the ray intersects with a Collider, otherwise false. 
            */
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : boolean
            /** Casts a ray against all colliders in the Scene and returns detailed information on what was hit.
            * @param origin The starting point of the ray in world coordinates.
            * @param direction The direction of the ray.
            * @param hitInfo If true is returned, hitInfo will contain more information about where the closest collider was hit. (See Also: RaycastHit).
            * @param maxDistance The max distance the ray should check for collisions.
            * @param layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true when the ray intersects any collider, otherwise false. 
            */
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static Raycast ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Same as above using ray.origin and ray.direction instead of origin and direction.
            * @param ray The starting point and direction of the ray.
            * @param maxDistance The max distance the ray should check for collisions.
            * @param layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true when the ray intersects any collider, otherwise false. 
            */
            public static Raycast ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $maxDistance: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray) : boolean
            /** Same as above using ray.origin and ray.direction instead of origin and direction.
            * @param ray The starting point and direction of the ray.
            * @param hitInfo If true is returned, hitInfo will contain more information about where the closest collider was hit. (See Also: RaycastHit).
            * @param maxDistance The max distance the ray should check for collisions.
            * @param layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns true when the ray intersects any collider, otherwise false. 
            */
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static Raycast ($ray: UnityEngine.Ray, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Returns true if there is any collider intersecting the line between start and end. * @param start Start point.
            * @param end End point.
            * @param layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $layerMask: number) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3) : boolean
            /** Returns true if there is any collider intersecting the line between start and end. * @param start Start point.
            * @param end End point.
            * @param layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
            */
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $layerMask: number) : boolean
            public static Linecast ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts a capsule against all colliders in the Scene and returns detailed information on what was hit.
            * @param point1 The center of the sphere at the start of the capsule.
            * @param point2 The center of the sphere at the end of the capsule.
            * @param radius The radius of the capsule.
            * @param direction The direction into which to sweep the capsule.
            * @param maxDistance The max length of the sweep.
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the capsule sweep intersects any collider, otherwise false. 
            */
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3) : boolean
            /** * @param point1 The center of the sphere at the start of the capsule.
            * @param point2 The center of the sphere at the end of the capsule.
            * @param radius The radius of the capsule.
            * @param direction The direction into which to sweep the capsule.
            * @param maxDistance The max length of the sweep.
            * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static CapsuleCast ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts a sphere along a ray and returns detailed information on what was hit.
            * @param origin The center of the sphere at the start of the sweep.
            * @param radius The radius of the sphere.
            * @param direction The direction into which to sweep the sphere.
            * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
            * @param maxDistance The max length of the cast.
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the sphere sweep intersects any collider, otherwise false. 
            */
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static SphereCast ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts a sphere along a ray and returns detailed information on what was hit.
            * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param radius The radius of the sphere.
            * @param maxDistance The max length of the cast.
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True when the sphere sweep intersects any collider, otherwise false. 
            */
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number) : boolean
            /** * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param radius The radius of the sphere.
            * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
            * @param maxDistance The max length of the cast.
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>, $maxDistance: number) : boolean
            public static SphereCast ($ray: UnityEngine.Ray, $radius: number, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** Casts the box along a ray and returns detailed information on what was hit.
            * @param center Center of the box.
            * @param halfExtents Half the size of the box in each dimension.
            * @param direction The direction in which to cast the box.
            * @param orientation Rotation of the box.
            * @param maxDistance The max length of the cast.
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True, if any intersections were found. 
            */
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : boolean
            /** Casts the box along a ray and returns detailed information on what was hit.
            * @param center Center of the box.
            * @param halfExtents Half the size of the box in each dimension.
            * @param direction The direction in which to cast the box.
            * @param hitInfo If true is returned, hitInfo will contain more information about where the collider was hit. (See Also: RaycastHit).
            * @param orientation Rotation of the box.
            * @param maxDistance The max length of the cast.
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True, if any intersections were found. 
            */
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion) : boolean
            public static BoxCast ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $hitInfo: $Ref<UnityEngine.RaycastHit>) : boolean
            /** See Also: Raycast. * @param origin The starting point of the ray in world coordinates.
            * @param direction The direction of the ray.
            * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param layermask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Casts a ray through the Scene and returns all hits. Note that order of the results is undefined.
            * @param ray The starting point and direction of the ray.
            * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of RaycastHit objects. Note that the order of the results is undefined. 
            */
            public static RaycastAll ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($ray: UnityEngine.Ray, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($ray: UnityEngine.Ray, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static RaycastAll ($ray: UnityEngine.Ray) : System.Array$1<UnityEngine.RaycastHit>
            /** Cast a ray through the Scene and store the hits into the buffer.
            * @param ray The starting point and direction of the ray.
            * @param results The buffer to store the hits into.
            * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static RaycastNonAlloc ($ray: UnityEngine.Ray, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Cast a ray through the Scene and store the hits into the buffer.
            * @param origin The starting point and direction of the ray.
            * @param results The buffer to store the hits into.
            * @param direction The direction of the ray.
            * @param maxDistance The max distance the rayhit is allowed to be from the start of the ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @param layerMask A that is used to selectively ignore colliders when casting a ray.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static RaycastNonAlloc ($origin: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Like Physics.CapsuleCast, but this function will return all hits the capsule sweep intersects.
            * @param point1 The center of the sphere at the start of the capsule.
            * @param point2 The center of the sphere at the end of the capsule.
            * @param radius The radius of the capsule.
            * @param direction The direction into which to sweep the capsule.
            * @param maxDistance The max length of the sweep.
            * @param layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of all colliders hit in the sweep. 
            */
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static CapsuleCastAll ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects.
            * @param origin The center of the sphere at the start of the sweep.
            * @param radius The radius of the sphere.
            * @param direction The direction in which to sweep the sphere.
            * @param maxDistance The max length of the sweep.
            * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns An array of all colliders hit in the sweep. 
            */
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Like Physics.SphereCast, but this function will return all hits the sphere sweep intersects. * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param radius The radius of the sphere.
            * @param maxDistance The max length of the sweep.
            * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static SphereCastAll ($ray: UnityEngine.Ray, $radius: number) : System.Array$1<UnityEngine.RaycastHit>
            /** Check the given capsule against the physics world and return all overlapping colliders.
            * @param point0 The center of the sphere at the start of the capsule.
            * @param point1 The center of the sphere at the end of the capsule.
            * @param radius The radius of the capsule.
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Colliders touching or inside the capsule. 
            */
            public static OverlapCapsule ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.Collider>
            public static OverlapCapsule ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $layerMask: number) : System.Array$1<UnityEngine.Collider>
            public static OverlapCapsule ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number) : System.Array$1<UnityEngine.Collider>
            /** Computes and stores colliders touching or inside the sphere.
            * @param position Center of the sphere.
            * @param radius Radius of the sphere.
            * @param layerMask A defines which layers of colliders to include in the query.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns an array with all colliders touching or inside the sphere. 
            */
            public static OverlapSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.Collider>
            public static OverlapSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number) : System.Array$1<UnityEngine.Collider>
            public static OverlapSphere ($position: UnityEngine.Vector3, $radius: number) : System.Array$1<UnityEngine.Collider>
            /** Simulate physics in the Scene. * @param step The time to advance physics by.
            */
            public static Simulate ($step: number) : void
            public static SyncTransforms () : void
            /** Compute the minimal translation required to separate the given colliders apart at specified poses.
            * @param colliderA The first collider.
            * @param positionA Position of the first collider.
            * @param rotationA Rotation of the first collider.
            * @param colliderB The second collider.
            * @param positionB Position of the second collider.
            * @param rotationB Rotation of the second collider.
            * @param direction Direction along which the translation required to separate the colliders apart is minimal.
            * @param distance The distance along direction that is required to separate the colliders apart.
            * @returns True, if the colliders overlap at the given poses. 
            */
            public static ComputePenetration ($colliderA: UnityEngine.Collider, $positionA: UnityEngine.Vector3, $rotationA: UnityEngine.Quaternion, $colliderB: UnityEngine.Collider, $positionB: UnityEngine.Vector3, $rotationB: UnityEngine.Quaternion, $direction: $Ref<UnityEngine.Vector3>, $distance: $Ref<number>) : boolean
            /** Returns a point on the given collider that is closest to the specified location.
            * @param point Location you want to find the closest point to.
            * @param collider The collider that you find the closest point on.
            * @param position The position of the collider.
            * @param rotation The rotation of the collider.
            * @returns The point on the collider that is closest to the specified location. 
            */
            public static ClosestPoint ($point: UnityEngine.Vector3, $collider: UnityEngine.Collider, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Vector3
            /** Computes and stores colliders touching or inside the sphere into the provided buffer.
            * @param position Center of the sphere.
            * @param radius Radius of the sphere.
            * @param results The buffer to store the results into.
            * @param layerMask A defines which layers of colliders to include in the query.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Returns the amount of colliders stored into the results buffer. 
            */
            public static OverlapSphereNonAlloc ($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static OverlapSphereNonAlloc ($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number) : number
            public static OverlapSphereNonAlloc ($position: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>) : number
            /** Returns true if there are any colliders overlapping the sphere defined by position and radius in world coordinates. * @param position Center of the sphere.
            * @param radius Radius of the sphere.
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static CheckSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CheckSphere ($position: UnityEngine.Vector3, $radius: number, $layerMask: number) : boolean
            public static CheckSphere ($position: UnityEngine.Vector3, $radius: number) : boolean
            /** Casts a capsule against all colliders in the Scene and returns detailed information on what was hit into the buffer.
            * @param point1 The center of the sphere at the start of the capsule.
            * @param point2 The center of the sphere at the end of the capsule.
            * @param radius The radius of the capsule.
            * @param direction The direction into which to sweep the capsule.
            * @param results The buffer to store the hits into.
            * @param maxDistance The max length of the sweep.
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the buffer. 
            */
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static CapsuleCastNonAlloc ($point1: UnityEngine.Vector3, $point2: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Cast sphere along the direction and store the results into buffer.
            * @param origin The center of the sphere at the start of the sweep.
            * @param radius The radius of the sphere.
            * @param direction The direction in which to sweep the sphere.
            * @param results The buffer to save the hits into.
            * @param maxDistance The max length of the sweep.
            * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static SphereCastNonAlloc ($origin: UnityEngine.Vector3, $radius: number, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Cast sphere along the direction and store the results into buffer.
            * @param ray The starting point and direction of the ray into which the sphere sweep is cast.
            * @param radius The radius of the sphere.
            * @param results The buffer to save the results to.
            * @param maxDistance The max length of the sweep.
            * @param layerMask A that is used to selectively ignore colliders when casting a sphere.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored into the results buffer. 
            */
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number, $layerMask: number) : number
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>, $maxDistance: number) : number
            public static SphereCastNonAlloc ($ray: UnityEngine.Ray, $radius: number, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Checks if any colliders overlap a capsule-shaped volume in world space. * @param start The center of the sphere at the start of the capsule.
            * @param end The center of the sphere at the end of the capsule.
            * @param radius The radius of the capsule.
            * @param layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            */
            public static CheckCapsule ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CheckCapsule ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number, $layerMask: number) : boolean
            public static CheckCapsule ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $radius: number) : boolean
            /** Check whether the given box overlaps with other colliders or not.
            * @param center Center of the box.
            * @param halfExtents Half the size of the box in each dimension.
            * @param orientation Rotation of the box.
            * @param layermask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns True, if the box overlaps with any colliders. 
            */
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layermask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : boolean
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number) : boolean
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : boolean
            public static CheckBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3) : boolean
            /** Find all colliders touching or inside of the given box.
            * @param center Center of the box.
            * @param halfExtents Half of the size of the box in each dimension.
            * @param orientation Rotation of the box.
            * @param layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns Colliders that overlap with the given box. 
            */
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.Collider>
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $layerMask: number) : System.Array$1<UnityEngine.Collider>
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : System.Array$1<UnityEngine.Collider>
            public static OverlapBox ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3) : System.Array$1<UnityEngine.Collider>
            /** Find all colliders touching or inside of the given box, and store them into the buffer.
            * @param center Center of the box.
            * @param halfExtents Half of the size of the box in each dimension.
            * @param results The buffer to store the results in.
            * @param orientation Rotation of the box.
            * @param layerMask A that is used to selectively ignore colliders when casting a ray.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of colliders stored in results. 
            */
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $mask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion, $mask: number) : number
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>, $orientation: UnityEngine.Quaternion) : number
            public static OverlapBoxNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.Collider>) : number
            /** Cast the box along the direction, and store hits in the provided buffer.
            * @param center Center of the box.
            * @param halfExtents Half the size of the box in each dimension.
            * @param direction The direction in which to cast the box.
            * @param results The buffer to store the results in.
            * @param orientation Rotation of the box.
            * @param maxDistance The max length of the cast.
            * @param layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of hits stored to the results buffer. 
            */
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : number
            public static BoxCastNonAlloc ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $results: System.Array$1<UnityEngine.RaycastHit>) : number
            /** Like Physics.BoxCast, but returns all hits.
            * @param center Center of the box.
            * @param halfExtents Half the size of the box in each dimension.
            * @param direction The direction in which to cast the box.
            * @param orientation Rotation of the box.
            * @param maxDistance The max length of the cast.
            * @param layermask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns All colliders that were hit. 
            */
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number, $layerMask: number) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion, $maxDistance: number) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3, $orientation: UnityEngine.Quaternion) : System.Array$1<UnityEngine.RaycastHit>
            public static BoxCastAll ($center: UnityEngine.Vector3, $halfExtents: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : System.Array$1<UnityEngine.RaycastHit>
            /** Check the given capsule against the physics world and return all overlapping colliders in the user-provided buffer.
            * @param point0 The center of the sphere at the start of the capsule.
            * @param point1 The center of the sphere at the end of the capsule.
            * @param radius The radius of the capsule.
            * @param results The buffer to store the results into.
            * @param layerMask A that is used to selectively ignore colliders when casting a capsule.
            * @param queryTriggerInteraction Specifies whether this query should hit Triggers.
            * @returns The amount of entries written to the buffer. 
            */
            public static OverlapCapsuleNonAlloc ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number, $queryTriggerInteraction: UnityEngine.QueryTriggerInteraction) : number
            public static OverlapCapsuleNonAlloc ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>, $layerMask: number) : number
            public static OverlapCapsuleNonAlloc ($point0: UnityEngine.Vector3, $point1: UnityEngine.Vector3, $radius: number, $results: System.Array$1<UnityEngine.Collider>) : number
            /** Rebuild the broadphase interest regions as well as set the world boundaries. * @param worldBounds Boundaries of the physics world.
            * @param subdivisions How many cells to create along x and z axis.
            */
            public static RebuildBroadphaseRegions ($worldBounds: UnityEngine.Bounds, $subdivisions: number) : void
            /** Prepares the Mesh for use with a MeshCollider. * @param meshID The instance ID of the Mesh to bake collision data from.
            * @param convex A flag to indicate whether to bake convex geometry or not.
            */
            public static BakeMesh ($meshID: number, $convex: boolean) : void
            public constructor ()
        }
        /** Represents a single instance of a 3D physics Scene. */
        class PhysicsScene extends System.ValueType implements System.IEquatable$1<UnityEngine.PhysicsScene>
        {
        }
        /** Access to application run-time data. */
        class Application extends System.Object
        {
        /** Returns true when called in any kind of built Player, or when called in the Editor in Play Mode (Read Only). */
            public static get isPlaying(): boolean;
            /** Whether the player currently has focus. Read-only. */
            public static get isFocused(): boolean;
            /** Returns a GUID for this build (Read Only). */
            public static get buildGUID(): string;
            /** Should the player be running when the application is in the background? */
            public static get runInBackground(): boolean;
            public static set runInBackground(value: boolean);
            /** Returns true when Unity is launched with the -batchmode flag from the command line (Read Only). */
            public static get isBatchMode(): boolean;
            /** Contains the path to the game data folder on the target device (Read Only). */
            public static get dataPath(): string;
            /** The path to the StreamingAssets folder (Read Only). */
            public static get streamingAssetsPath(): string;
            /** (Read Only) Contains the path to a persistent data directory. */
            public static get persistentDataPath(): string;
            /** Contains the path to a temporary data / cache directory (Read Only). */
            public static get temporaryCachePath(): string;
            /** The URL of the document. For WebGL, this a web URL. For Android, iOS, or Universal Windows Platform (UWP) this is a deep link URL. (Read Only) */
            public static get absoluteURL(): string;
            /** The version of the Unity runtime used to play the content. */
            public static get unityVersion(): string;
            /** Returns application version number  (Read Only). */
            public static get version(): string;
            /** Returns the name of the store or package that installed the application (Read Only). */
            public static get installerName(): string;
            /** Returns application identifier at runtime. On Apple platforms this is the 'bundleIdentifier' saved in the info.plist file, on Android it's the 'package' from the AndroidManifest.xml.  */
            public static get identifier(): string;
            /** Returns application install mode (Read Only). */
            public static get installMode(): UnityEngine.ApplicationInstallMode;
            /** Returns application running in sandbox (Read Only). */
            public static get sandboxType(): UnityEngine.ApplicationSandboxType;
            /** Returns application product name (Read Only). */
            public static get productName(): string;
            /** Return application company name (Read Only). */
            public static get companyName(): string;
            /** A unique cloud project identifier. It is unique for every project (Read Only). */
            public static get cloudProjectId(): string;
            /** Instructs the game to try to render at a specified frame rate. */
            public static get targetFrameRate(): number;
            public static set targetFrameRate(value: number);
            /** Returns the path to the console log file, or an empty string if the current platform does not support log files. */
            public static get consoleLogPath(): string;
            /** Priority of background loading thread. */
            public static get backgroundLoadingPriority(): UnityEngine.ThreadPriority;
            public static set backgroundLoadingPriority(value: UnityEngine.ThreadPriority);
            /** Returns false if application is altered in any way after it was built. */
            public static get genuine(): boolean;
            /** Returns true if application integrity can be confirmed. */
            public static get genuineCheckAvailable(): boolean;
            /** Returns the platform the game is running on (Read Only). */
            public static get platform(): UnityEngine.RuntimePlatform;
            /** Is the current Runtime platform a known mobile platform. */
            public static get isMobilePlatform(): boolean;
            /** Is the current Runtime platform a known console platform. */
            public static get isConsolePlatform(): boolean;
            /** The language the user's operating system is running in. */
            public static get systemLanguage(): UnityEngine.SystemLanguage;
            /** Returns the type of Internet reachability currently possible on the device. */
            public static get internetReachability(): UnityEngine.NetworkReachability;
            /** Are we running inside the Unity editor? (Read Only) */
            public static get isEditor(): boolean;
            public static Quit ($exitCode: number) : void
            public static Quit () : void
            public static Unload () : void
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded ($levelIndex: number) : boolean
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded ($levelName: string) : boolean
            /** Returns true if the given object is part of the playing world either in any kind of built Player or in Play Mode.
            * @param obj The object to test.
            * @returns True if the object is part of the playing world. 
            */
            public static IsPlaying ($obj: UnityEngine.Object) : boolean
            public static GetBuildTags () : System.Array$1<string>
            /** Set an array of feature tags for this build. */
            public static SetBuildTags ($buildTags: System.Array$1<string>) : void
            public static HasProLicense () : boolean
            public static RequestAdvertisingIdentifierAsync ($delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback) : boolean
            /** Opens the URL specified, subject to the permissions and limitations of your app’s current platform and environment. This is handled in different ways depending on the nature of the URL, and with different security restrictions, depending on the runtime platform. * @param url The URL to open.
            */
            public static OpenURL ($url: string) : void
            /** Get stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static GetStackTraceLogType ($logType: UnityEngine.LogType) : UnityEngine.StackTraceLogType
            /** Set stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static SetStackTraceLogType ($logType: UnityEngine.LogType, $stackTraceType: UnityEngine.StackTraceLogType) : void
            /** Request authorization to use the webcam or microphone on iOS. */
            public static RequestUserAuthorization ($mode: UnityEngine.UserAuthorization) : UnityEngine.AsyncOperation
            /** Check if the user has authorized use of the webcam or microphone in the Web Player. */
            public static HasUserAuthorization ($mode: UnityEngine.UserAuthorization) : boolean
            public static add_lowMemory ($value: UnityEngine.Application.LowMemoryCallback) : void
            public static remove_lowMemory ($value: UnityEngine.Application.LowMemoryCallback) : void
            public static add_logMessageReceived ($value: UnityEngine.Application.LogCallback) : void
            public static remove_logMessageReceived ($value: UnityEngine.Application.LogCallback) : void
            public static add_logMessageReceivedThreaded ($value: UnityEngine.Application.LogCallback) : void
            public static remove_logMessageReceivedThreaded ($value: UnityEngine.Application.LogCallback) : void
            public static add_onBeforeRender ($value: UnityEngine.Events.UnityAction) : void
            public static remove_onBeforeRender ($value: UnityEngine.Events.UnityAction) : void
            public static add_focusChanged ($value: System.Action$1<boolean>) : void
            public static remove_focusChanged ($value: System.Action$1<boolean>) : void
            public static add_deepLinkActivated ($value: System.Action$1<string>) : void
            public static remove_deepLinkActivated ($value: System.Action$1<string>) : void
            public static add_wantsToQuit ($value: System.Func$1<boolean>) : void
            public static remove_wantsToQuit ($value: System.Func$1<boolean>) : void
            public static add_quitting ($value: System.Action) : void
            public static remove_quitting ($value: System.Action) : void
            public static add_unloading ($value: System.Action) : void
            public static remove_unloading ($value: System.Action) : void
            public constructor ()
        }
        /** Application installation mode (Read Only). */
        enum ApplicationInstallMode
        { Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
        /** Application sandbox type. */
        enum ApplicationSandboxType
        { Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
        /** Stack trace logging options. */
        enum StackTraceLogType
        { None = 0, ScriptOnly = 1, Full = 2 }
        /** Priority of a thread. */
        enum ThreadPriority
        { Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        /** Asynchronous operation coroutine. */
        class AsyncOperation extends UnityEngine.YieldInstruction
        {
        }
        /** Constants to pass to Application.RequestUserAuthorization. */
        enum UserAuthorization
        { WebCam = 1, Microphone = 2 }
        /** The platform application is running. Returned by Application.platform. */
        enum RuntimePlatform
        { OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35, GameCoreScarlett = 36, GameCoreXboxSeries = 36, GameCoreXboxOne = 37, PS5 = 38 }
        /** The language the user's operating system is running in. Returned by Application.systemLanguage. */
        enum SystemLanguage
        { Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Unknown = 42, Hungarian = 18 }
        /** Describes network reachability options. */
        enum NetworkReachability
        { NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
        /** Type of the imported(native) data. */
        enum AudioType
        { UNKNOWN = 0, ACC = 1, AIFF = 2, IT = 10, MOD = 12, MPEG = 13, OGGVORBIS = 14, S3M = 17, WAV = 20, XM = 21, XMA = 22, VAG = 23, AUDIOQUEUE = 24 }
        /** Data structure for downloading AssetBundles to a customized cache path. See Also:UnityWebRequestAssetBundle.GetAssetBundle for more information. */
        class CachedAssetBundle extends System.ValueType
        {
        }
        /** Helper class to generate form data to post to web servers using the UnityWebRequest or WWW classes. */
        class WWWForm extends System.Object
        {
        }
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file. */
        class Scene extends System.ValueType
        {
            public get handle(): number;
            /** Returns the relative path of the Scene. Like: "AssetsMyScenesMyScene.unity". */
            public get path(): string;
            /** Returns the name of the Scene that is currently active in the game or app. */
            public get name(): string;
            public set name(value: string);
            /** Returns true if the Scene is loaded. */
            public get isLoaded(): boolean;
            /** Return the index of the Scene in the Build Settings. */
            public get buildIndex(): number;
            /** Returns true if the Scene is modifed. */
            public get isDirty(): boolean;
            /** The number of root transforms of this Scene. */
            public get rootCount(): number;
            public get isSubScene(): boolean;
            public set isSubScene(value: boolean);
            public IsValid () : boolean
            public GetRootGameObjects () : System.Array$1<UnityEngine.GameObject>
            public GetRootGameObjects ($rootGameObjects: System.Collections.Generic.List$1<UnityEngine.GameObject>) : void
            public static op_Equality ($lhs: UnityEngine.SceneManagement.Scene, $rhs: UnityEngine.SceneManagement.Scene) : boolean
            public static op_Inequality ($lhs: UnityEngine.SceneManagement.Scene, $rhs: UnityEngine.SceneManagement.Scene) : boolean
        }
    }
    namespace UnityEngine.AudioClip {
        interface PCMReaderCallback
        { (data: System.Array$1<number>) : void; }
        var PCMReaderCallback: { new (func: (data: System.Array$1<number>) => void): PCMReaderCallback; }
        interface PCMSetPositionCallback
        { (position: number) : void; }
        var PCMSetPositionCallback: { new (func: (position: number) => void): PCMSetPositionCallback; }
    }
    namespace UnityEngine.ParticleSystem {
        class MainModule extends System.ValueType
        {
            public get duration(): number;
            public set duration(value: number);
            public get loop(): boolean;
            public set loop(value: boolean);
            public get prewarm(): boolean;
            public set prewarm(value: boolean);
            public get startDelay(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startDelay(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startDelayMultiplier(): number;
            public set startDelayMultiplier(value: number);
            public get startLifetime(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startLifetime(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startLifetimeMultiplier(): number;
            public set startLifetimeMultiplier(value: number);
            public get startSpeed(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startSpeed(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startSpeedMultiplier(): number;
            public set startSpeedMultiplier(value: number);
            public get startSize3D(): boolean;
            public set startSize3D(value: boolean);
            public get startSize(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startSize(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startSizeMultiplier(): number;
            public set startSizeMultiplier(value: number);
            public get startSizeX(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startSizeX(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startSizeXMultiplier(): number;
            public set startSizeXMultiplier(value: number);
            public get startSizeY(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startSizeY(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startSizeYMultiplier(): number;
            public set startSizeYMultiplier(value: number);
            public get startSizeZ(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startSizeZ(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startSizeZMultiplier(): number;
            public set startSizeZMultiplier(value: number);
            public get startRotation3D(): boolean;
            public set startRotation3D(value: boolean);
            public get startRotation(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startRotation(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startRotationMultiplier(): number;
            public set startRotationMultiplier(value: number);
            public get startRotationX(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startRotationX(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startRotationXMultiplier(): number;
            public set startRotationXMultiplier(value: number);
            public get startRotationY(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startRotationY(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startRotationYMultiplier(): number;
            public set startRotationYMultiplier(value: number);
            public get startRotationZ(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set startRotationZ(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get startRotationZMultiplier(): number;
            public set startRotationZMultiplier(value: number);
            public get flipRotation(): number;
            public set flipRotation(value: number);
            public get startColor(): UnityEngine.ParticleSystem.MinMaxGradient;
            public set startColor(value: UnityEngine.ParticleSystem.MinMaxGradient);
            public get gravityModifier(): UnityEngine.ParticleSystem.MinMaxCurve;
            public set gravityModifier(value: UnityEngine.ParticleSystem.MinMaxCurve);
            public get gravityModifierMultiplier(): number;
            public set gravityModifierMultiplier(value: number);
            public get simulationSpace(): UnityEngine.ParticleSystemSimulationSpace;
            public set simulationSpace(value: UnityEngine.ParticleSystemSimulationSpace);
            public get customSimulationSpace(): UnityEngine.Transform;
            public set customSimulationSpace(value: UnityEngine.Transform);
            public get simulationSpeed(): number;
            public set simulationSpeed(value: number);
            public get useUnscaledTime(): boolean;
            public set useUnscaledTime(value: boolean);
            public get scalingMode(): UnityEngine.ParticleSystemScalingMode;
            public set scalingMode(value: UnityEngine.ParticleSystemScalingMode);
            public get playOnAwake(): boolean;
            public set playOnAwake(value: boolean);
            public get maxParticles(): number;
            public set maxParticles(value: number);
            public get emitterVelocityMode(): UnityEngine.ParticleSystemEmitterVelocityMode;
            public set emitterVelocityMode(value: UnityEngine.ParticleSystemEmitterVelocityMode);
            public get stopAction(): UnityEngine.ParticleSystemStopAction;
            public set stopAction(value: UnityEngine.ParticleSystemStopAction);
            public get ringBufferMode(): UnityEngine.ParticleSystemRingBufferMode;
            public set ringBufferMode(value: UnityEngine.ParticleSystemRingBufferMode);
            public get ringBufferLoopRange(): UnityEngine.Vector2;
            public set ringBufferLoopRange(value: UnityEngine.Vector2);
            public get cullingMode(): UnityEngine.ParticleSystemCullingMode;
            public set cullingMode(value: UnityEngine.ParticleSystemCullingMode);
        }
        class MinMaxCurve extends System.ValueType
        {
        }
        class MinMaxGradient extends System.ValueType
        {
        }
        class Particle extends System.ValueType
        {
        }
        class PlaybackState extends System.ValueType
        {
        }
        class Trails extends System.ValueType
        {
        }
        class EmitParams extends System.ValueType
        {
        }
        class EmissionModule extends System.ValueType
        {
        }
        class ShapeModule extends System.ValueType
        {
        }
        class VelocityOverLifetimeModule extends System.ValueType
        {
        }
        class LimitVelocityOverLifetimeModule extends System.ValueType
        {
        }
        class InheritVelocityModule extends System.ValueType
        {
        }
        class LifetimeByEmitterSpeedModule extends System.ValueType
        {
        }
        class ForceOverLifetimeModule extends System.ValueType
        {
        }
        class ColorOverLifetimeModule extends System.ValueType
        {
        }
        class ColorBySpeedModule extends System.ValueType
        {
        }
        class SizeOverLifetimeModule extends System.ValueType
        {
        }
        class SizeBySpeedModule extends System.ValueType
        {
        }
        class RotationOverLifetimeModule extends System.ValueType
        {
        }
        class RotationBySpeedModule extends System.ValueType
        {
        }
        class ExternalForcesModule extends System.ValueType
        {
        }
        class NoiseModule extends System.ValueType
        {
        }
        class CollisionModule extends System.ValueType
        {
        }
        class TriggerModule extends System.ValueType
        {
        }
        class SubEmittersModule extends System.ValueType
        {
        }
        class TextureSheetAnimationModule extends System.ValueType
        {
        }
        class LightsModule extends System.ValueType
        {
        }
        class TrailModule extends System.ValueType
        {
        }
        class CustomDataModule extends System.ValueType
        {
        }
    }
    namespace UnityEngine.Playables {
        /** Use the PlayableGraph to manage Playable creations and destructions. */
        class PlayableGraph extends System.ValueType
        {
        }
    }
    namespace UnityEngine.Experimental.Rendering {
        /** Use this format to create either Textures or RenderTextures from scripts. */
        enum GraphicsFormat
        { None = 0, R8_SRGB = 1, R8G8_SRGB = 2, R8G8B8_SRGB = 3, R8G8B8A8_SRGB = 4, R8_UNorm = 5, R8G8_UNorm = 6, R8G8B8_UNorm = 7, R8G8B8A8_UNorm = 8, R8_SNorm = 9, R8G8_SNorm = 10, R8G8B8_SNorm = 11, R8G8B8A8_SNorm = 12, R8_UInt = 13, R8G8_UInt = 14, R8G8B8_UInt = 15, R8G8B8A8_UInt = 16, R8_SInt = 17, R8G8_SInt = 18, R8G8B8_SInt = 19, R8G8B8A8_SInt = 20, R16_UNorm = 21, R16G16_UNorm = 22, R16G16B16_UNorm = 23, R16G16B16A16_UNorm = 24, R16_SNorm = 25, R16G16_SNorm = 26, R16G16B16_SNorm = 27, R16G16B16A16_SNorm = 28, R16_UInt = 29, R16G16_UInt = 30, R16G16B16_UInt = 31, R16G16B16A16_UInt = 32, R16_SInt = 33, R16G16_SInt = 34, R16G16B16_SInt = 35, R16G16B16A16_SInt = 36, R32_UInt = 37, R32G32_UInt = 38, R32G32B32_UInt = 39, R32G32B32A32_UInt = 40, R32_SInt = 41, R32G32_SInt = 42, R32G32B32_SInt = 43, R32G32B32A32_SInt = 44, R16_SFloat = 45, R16G16_SFloat = 46, R16G16B16_SFloat = 47, R16G16B16A16_SFloat = 48, R32_SFloat = 49, R32G32_SFloat = 50, R32G32B32_SFloat = 51, R32G32B32A32_SFloat = 52, B8G8R8_SRGB = 56, B8G8R8A8_SRGB = 57, B8G8R8_UNorm = 58, B8G8R8A8_UNorm = 59, B8G8R8_SNorm = 60, B8G8R8A8_SNorm = 61, B8G8R8_UInt = 62, B8G8R8A8_UInt = 63, B8G8R8_SInt = 64, B8G8R8A8_SInt = 65, R4G4B4A4_UNormPack16 = 66, B4G4R4A4_UNormPack16 = 67, R5G6B5_UNormPack16 = 68, B5G6R5_UNormPack16 = 69, R5G5B5A1_UNormPack16 = 70, B5G5R5A1_UNormPack16 = 71, A1R5G5B5_UNormPack16 = 72, E5B9G9R9_UFloatPack32 = 73, B10G11R11_UFloatPack32 = 74, A2B10G10R10_UNormPack32 = 75, A2B10G10R10_UIntPack32 = 76, A2B10G10R10_SIntPack32 = 77, A2R10G10B10_UNormPack32 = 78, A2R10G10B10_UIntPack32 = 79, A2R10G10B10_SIntPack32 = 80, A2R10G10B10_XRSRGBPack32 = 81, A2R10G10B10_XRUNormPack32 = 82, R10G10B10_XRSRGBPack32 = 83, R10G10B10_XRUNormPack32 = 84, A10R10G10B10_XRSRGBPack32 = 85, A10R10G10B10_XRUNormPack32 = 86, RGB_DXT1_SRGB = 96, RGBA_DXT1_SRGB = 96, RGB_DXT1_UNorm = 97, RGBA_DXT1_UNorm = 97, RGBA_DXT3_SRGB = 98, RGBA_DXT3_UNorm = 99, RGBA_DXT5_SRGB = 100, RGBA_DXT5_UNorm = 101, R_BC4_UNorm = 102, R_BC4_SNorm = 103, RG_BC5_UNorm = 104, RG_BC5_SNorm = 105, RGB_BC6H_UFloat = 106, RGB_BC6H_SFloat = 107, RGBA_BC7_SRGB = 108, RGBA_BC7_UNorm = 109, RGB_PVRTC_2Bpp_SRGB = 110, RGB_PVRTC_2Bpp_UNorm = 111, RGB_PVRTC_4Bpp_SRGB = 112, RGB_PVRTC_4Bpp_UNorm = 113, RGBA_PVRTC_2Bpp_SRGB = 114, RGBA_PVRTC_2Bpp_UNorm = 115, RGBA_PVRTC_4Bpp_SRGB = 116, RGBA_PVRTC_4Bpp_UNorm = 117, RGB_ETC_UNorm = 118, RGB_ETC2_SRGB = 119, RGB_ETC2_UNorm = 120, RGB_A1_ETC2_SRGB = 121, RGB_A1_ETC2_UNorm = 122, RGBA_ETC2_SRGB = 123, RGBA_ETC2_UNorm = 124, R_EAC_UNorm = 125, R_EAC_SNorm = 126, RG_EAC_UNorm = 127, RG_EAC_SNorm = 128, RGBA_ASTC4X4_SRGB = 129, RGBA_ASTC4X4_UNorm = 130, RGBA_ASTC5X5_SRGB = 131, RGBA_ASTC5X5_UNorm = 132, RGBA_ASTC6X6_SRGB = 133, RGBA_ASTC6X6_UNorm = 134, RGBA_ASTC8X8_SRGB = 135, RGBA_ASTC8X8_UNorm = 136, RGBA_ASTC10X10_SRGB = 137, RGBA_ASTC10X10_UNorm = 138, RGBA_ASTC12X12_SRGB = 139, RGBA_ASTC12X12_UNorm = 140, RGBA_ASTC4X4_UFloat = 145, RGBA_ASTC5X5_UFloat = 146, RGBA_ASTC6X6_UFloat = 147, RGBA_ASTC8X8_UFloat = 148, RGBA_ASTC10X10_UFloat = 149, RGBA_ASTC12X12_UFloat = 150 }
        /** Use this format usages to figure out the capabilities of specific GraphicsFormat */
        enum FormatUsage
        { Sample = 0, Linear = 1, Sparse = 2, Render = 4, Blend = 5, GetPixels = 6, SetPixels = 7, SetPixels32 = 8, ReadPixels = 9, LoadStore = 10, MSAA2x = 11, MSAA4x = 12, MSAA8x = 13, StencilSampling = 16 }
        /** 
        Use a default format to create either Textures or RenderTextures from scripts based on platform specific capability.
        */
        enum DefaultFormat
        { LDR = 0, HDR = 1 }
    }
    namespace UnityEngine.Rendering {
        /** Texture "dimension" (type). */
        enum TextureDimension
        { Unknown = -1, None = 0, Any = 1, Tex2D = 2, Tex3D = 3, Cube = 4, Tex2DArray = 5, CubeArray = 6 }
        /** Graphics device API type. */
        enum GraphicsDeviceType
        { OpenGL2 = 0, Direct3D9 = 1, Direct3D11 = 2, PlayStation3 = 3, Null = 4, Xbox360 = 6, OpenGLES2 = 8, OpenGLES3 = 11, PlayStationVita = 12, PlayStation4 = 13, XboxOne = 14, PlayStationMobile = 15, Metal = 16, OpenGLCore = 17, Direct3D12 = 18, N3DS = 19, Vulkan = 21, Switch = 22, XboxOneD3D12 = 23, GameCoreXboxOne = 24, GameCoreScarlett = 25, GameCoreXboxSeries = 25, PlayStation5 = 26, PlayStation5NGGC = 27 }
        /** Options for the application's actual rendering threading mode. */
        enum RenderingThreadingMode
        { Direct = 0, SingleThreaded = 1, MultiThreaded = 2, LegacyJobified = 3, NativeGraphicsJobs = 4, NativeGraphicsJobsWithoutRenderThread = 5 }
        /** Support for various Graphics.CopyTexture cases. */
        enum CopyTextureSupport
        { None = 0, Basic = 1, Copy3D = 2, DifferentTypes = 4, TextureToRT = 8, RTToTexture = 16 }
        /** Data type of a VertexAttribute. */
        enum VertexAttributeFormat
        { Float32 = 0, Float16 = 1, UNorm8 = 2, SNorm8 = 3, UNorm16 = 4, SNorm16 = 5, UInt8 = 6, SInt8 = 7, UInt16 = 8, SInt16 = 9, UInt32 = 10, SInt32 = 11 }
        /** Opaque object sorting mode of a Camera. */
        enum OpaqueSortMode
        { Default = 0, FrontToBack = 1, NoDistanceSort = 2 }
        /** Defines a place in camera's rendering to attach Rendering.CommandBuffer objects to. */
        enum CameraEvent
        { BeforeDepthTexture = 0, AfterDepthTexture = 1, BeforeDepthNormalsTexture = 2, AfterDepthNormalsTexture = 3, BeforeGBuffer = 4, AfterGBuffer = 5, BeforeLighting = 6, AfterLighting = 7, BeforeFinalPass = 8, AfterFinalPass = 9, BeforeForwardOpaque = 10, AfterForwardOpaque = 11, BeforeImageEffectsOpaque = 12, AfterImageEffectsOpaque = 13, BeforeSkybox = 14, AfterSkybox = 15, BeforeForwardAlpha = 16, AfterForwardAlpha = 17, BeforeImageEffects = 18, AfterImageEffects = 19, AfterEverything = 20, BeforeReflections = 21, AfterReflections = 22, BeforeHaloAndLensFlares = 23, AfterHaloAndLensFlares = 24 }
        /** List of graphics commands to execute. */
        class CommandBuffer extends System.Object implements System.IDisposable
        {
        }
        /** Describes the desired characteristics with respect to prioritisation and load balancing of the queue that a command buffer being submitted via Graphics.ExecuteCommandBufferAsync or [[ScriptableRenderContext.ExecuteCommandBufferAsync] should be sent to. */
        enum ComputeQueueType
        { Default = 0, Background = 1, Urgent = 2 }
        /** Parameters that configure a culling operation in the Scriptable Render Pipeline. */
        class ScriptableCullingParameters extends System.ValueType implements System.IEquatable$1<UnityEngine.Rendering.ScriptableCullingParameters>
        {
        }
    }
    namespace UnityEngine.Camera {
        interface CameraCallback
        { (cam: UnityEngine.Camera) : void; }
        var CameraCallback: { new (func: (cam: UnityEngine.Camera) => void): CameraCallback; }
        enum GateFitMode
        { Vertical = 1, Horizontal = 2, Fill = 3, Overscan = 4, None = 0 }
        enum MonoOrStereoscopicEye
        { Left = 0, Right = 1, Mono = 2 }
        class GateFitParameters extends System.ValueType
        {
        }
        enum StereoscopicEye
        { Left = 0, Right = 1 }
        class RenderRequest extends System.ValueType
        {
        }
    }
    namespace Unity.Collections {
        class NativeArray$1<T> extends System.ValueType implements System.Collections.IEnumerable, System.IDisposable, System.IEquatable$1<Unity.Collections.NativeArray$1<T>>, System.Collections.Generic.IEnumerable$1<T>
        {
        }
    }
    namespace UnityEngine.Audio {
        /** Object representing a group in the mixer. */
        class AudioMixerGroup extends UnityEngine.Object implements UnityEngine.Internal.ISubAssetNotDuplicatable
        {
        }
    }
    namespace UnityEngine.Internal {
        interface ISubAssetNotDuplicatable
        {
        }
    }
    namespace UnityEngine.Application {
        interface AdvertisingIdentifierCallback
        { (advertisingId: string, trackingEnabled: boolean, errorMsg: string) : void; }
        var AdvertisingIdentifierCallback: { new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback; }
        interface LowMemoryCallback
        { () : void; }
        var LowMemoryCallback: { new (func: () => void): LowMemoryCallback; }
        interface LogCallback
        { (condition: string, stackTrace: string, type: UnityEngine.LogType) : void; }
        var LogCallback: { new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback; }
    }
    namespace UnityEngine.Events {
        /** Zero argument delegate used by UnityEvents. */
        interface UnityAction
        { () : void; }
        var UnityAction: { new (func: () => void): UnityAction; }
    }
    namespace UnityEngine.Networking {
        /** Provides methods to communicate with web servers. */
        class UnityWebRequest extends System.Object implements System.IDisposable
        {
        /** The string "GET", commonly used as the verb for an HTTP GET request. */
            public static kHttpVerbGET : string/** The string "HEAD", commonly used as the verb for an HTTP HEAD request. */
            public static kHttpVerbHEAD : string/** The string "POST", commonly used as the verb for an HTTP POST request. */
            public static kHttpVerbPOST : string/** The string "PUT", commonly used as the verb for an HTTP PUT request. */
            public static kHttpVerbPUT : string/** The string "CREATE", commonly used as the verb for an HTTP CREATE request. */
            public static kHttpVerbCREATE : string/** The string "DELETE", commonly used as the verb for an HTTP DELETE request. */
            public static kHttpVerbDELETE : string/** If true, any CertificateHandler attached to this UnityWebRequest will have CertificateHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
            public get disposeCertificateHandlerOnDispose(): boolean;
            public set disposeCertificateHandlerOnDispose(value: boolean);
            /** If true, any DownloadHandler attached to this UnityWebRequest will have DownloadHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
            public get disposeDownloadHandlerOnDispose(): boolean;
            public set disposeDownloadHandlerOnDispose(value: boolean);
            /** If true, any UploadHandler attached to this UnityWebRequest will have UploadHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
            public get disposeUploadHandlerOnDispose(): boolean;
            public set disposeUploadHandlerOnDispose(value: boolean);
            /** Defines the HTTP verb used by this UnityWebRequest, such as GET or POST. */
            public get method(): string;
            public set method(value: string);
            /** A human-readable string describing any system errors encountered by this UnityWebRequest object while handling HTTP requests or responses. (Read Only) */
            public get error(): string;
            /** Determines whether this UnityWebRequest will include Expect: 100-Continue in its outgoing request headers. (Default: true). */
            public get useHttpContinue(): boolean;
            public set useHttpContinue(value: boolean);
            /** Defines the target URL for the UnityWebRequest to communicate with. */
            public get url(): string;
            public set url(value: string);
            /** Defines the target URI for the UnityWebRequest to communicate with. */
            public get uri(): System.Uri;
            public set uri(value: System.Uri);
            /** The numeric HTTP response code returned by the server, such as 200, 404 or 500. (Read Only) */
            public get responseCode(): bigint;
            /** Returns a floating-point value between 0.0 and 1.0, indicating the progress of uploading body data to the server. */
            public get uploadProgress(): number;
            /** Returns true while a UnityWebRequest’s configuration properties can be altered. (Read Only) */
            public get isModifiable(): boolean;
            /** Returns true after the UnityWebRequest has finished communicating with the remote server. (Read Only) */
            public get isDone(): boolean;
            /** The result of this UnityWebRequest. */
            public get result(): UnityEngine.Networking.UnityWebRequest.Result;
            /** Returns a floating-point value between 0.0 and 1.0, indicating the progress of downloading body data from the server. (Read Only) */
            public get downloadProgress(): number;
            /** Returns the number of bytes of body data the system has uploaded to the remote server. (Read Only) */
            public get uploadedBytes(): bigint;
            /** Returns the number of bytes of body data the system has downloaded from the remote server. (Read Only) */
            public get downloadedBytes(): bigint;
            /** Indicates the number of redirects which this UnityWebRequest will follow before halting with a “Redirect Limit Exceeded” system error. */
            public get redirectLimit(): number;
            public set redirectLimit(value: number);
            /** Holds a reference to the UploadHandler object which manages body data to be uploaded to the remote server. */
            public get uploadHandler(): UnityEngine.Networking.UploadHandler;
            public set uploadHandler(value: UnityEngine.Networking.UploadHandler);
            /** Holds a reference to a DownloadHandler object, which manages body data received from the remote server by this UnityWebRequest. */
            public get downloadHandler(): UnityEngine.Networking.DownloadHandler;
            public set downloadHandler(value: UnityEngine.Networking.DownloadHandler);
            /** Holds a reference to a CertificateHandler object, which manages certificate validation for this UnityWebRequest. */
            public get certificateHandler(): UnityEngine.Networking.CertificateHandler;
            public set certificateHandler(value: UnityEngine.Networking.CertificateHandler);
            /** Sets UnityWebRequest to attempt to abort after the number of seconds in timeout have passed. */
            public get timeout(): number;
            public set timeout(value: number);
            public static ClearCookieCache () : void
            public static ClearCookieCache ($uri: System.Uri) : void
            public Dispose () : void
            public SendWebRequest () : UnityEngine.Networking.UnityWebRequestAsyncOperation
            public Abort () : void
            /** Retrieves the value of a custom request header.
            * @param name Name of the custom request header. Case-insensitive.
            * @returns The value of the custom request header. If no custom header with a matching name has been set, returns an empty string. 
            */
            public GetRequestHeader ($name: string) : string
            /** Set a HTTP request header to a custom value. * @param name The key of the header to be set. Case-sensitive.
            * @param value The header's intended value.
            */
            public SetRequestHeader ($name: string, $value: string) : void
            /** Retrieves the value of a response header from the latest HTTP response received.
            * @param name The name of the HTTP header to retrieve. Case-insensitive.
            * @returns The value of the HTTP header from the latest HTTP response. If no header with a matching name has been received, or no responses have been received, returns null. 
            */
            public GetResponseHeader ($name: string) : string
            public GetResponseHeaders () : System.Collections.Generic.Dictionary$2<string, string>
            /** Create a UnityWebRequest for HTTP GET.
            * @param uri The URI of the resource to retrieve via HTTP GET.
            * @returns An object that retrieves data from the uri. 
            */
            public static Get ($uri: string) : UnityEngine.Networking.UnityWebRequest
            /** Create a UnityWebRequest for HTTP GET.
            * @param uri The URI of the resource to retrieve via HTTP GET.
            * @returns An object that retrieves data from the uri. 
            */
            public static Get ($uri: System.Uri) : UnityEngine.Networking.UnityWebRequest
            /** Creates a UnityWebRequest configured for HTTP DELETE.
            * @param uri The URI to which a DELETE request should be sent.
            * @returns A UnityWebRequest configured to send an HTTP DELETE request. 
            */
            public static Delete ($uri: string) : UnityEngine.Networking.UnityWebRequest
            public static Delete ($uri: System.Uri) : UnityEngine.Networking.UnityWebRequest
            /** Creates a UnityWebRequest configured to send a HTTP HEAD request.
            * @param uri The URI to which to send a HTTP HEAD request.
            * @returns A UnityWebRequest configured to transmit a HTTP HEAD request. 
            */
            public static Head ($uri: string) : UnityEngine.Networking.UnityWebRequest
            public static Head ($uri: System.Uri) : UnityEngine.Networking.UnityWebRequest
            /** Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.
            * @param uri The URI to which the data will be sent.
            * @param bodyData The data to transmit to the remote server.
            If a string, the string will be converted to raw bytes via <a href="https:msdn.microsoft.comen-uslibrarysystem.text.encoding.utf8">System.Text.Encoding.UTF8<a>.
            * @returns A UnityWebRequest configured to transmit bodyData to uri via HTTP PUT. 
            */
            public static Put ($uri: string, $bodyData: System.Array$1<number>) : UnityEngine.Networking.UnityWebRequest
            public static Put ($uri: System.Uri, $bodyData: System.Array$1<number>) : UnityEngine.Networking.UnityWebRequest
            /** Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.
            * @param uri The URI to which the data will be sent.
            * @param bodyData The data to transmit to the remote server.
            If a string, the string will be converted to raw bytes via <a href="https:msdn.microsoft.comen-uslibrarysystem.text.encoding.utf8">System.Text.Encoding.UTF8<a>.
            * @returns A UnityWebRequest configured to transmit bodyData to uri via HTTP PUT. 
            */
            public static Put ($uri: string, $bodyData: string) : UnityEngine.Networking.UnityWebRequest
            public static Put ($uri: System.Uri, $bodyData: string) : UnityEngine.Networking.UnityWebRequest
            /** Creates a UnityWebRequest configured to send form data to a server via HTTP POST.
            * @param uri The target URI to which form data will be transmitted.
            * @param postData Form body data. Will be URLEncoded prior to transmission.
            * @returns A UnityWebRequest configured to send form data to uri via POST. 
            */
            public static Post ($uri: string, $postData: string) : UnityEngine.Networking.UnityWebRequest
            public static Post ($uri: System.Uri, $postData: string) : UnityEngine.Networking.UnityWebRequest
            /** Create a UnityWebRequest configured to send form data to a server via HTTP POST.
            * @param uri The target URI to which form data will be transmitted.
            * @param formData Form fields or files encapsulated in a WWWForm object, for formatting and transmission to the remote server.
            * @returns A UnityWebRequest configured to send form data to uri via POST. 
            */
            public static Post ($uri: string, $formData: UnityEngine.WWWForm) : UnityEngine.Networking.UnityWebRequest
            public static Post ($uri: System.Uri, $formData: UnityEngine.WWWForm) : UnityEngine.Networking.UnityWebRequest
            public static Post ($uri: string, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>) : UnityEngine.Networking.UnityWebRequest
            public static Post ($uri: System.Uri, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>) : UnityEngine.Networking.UnityWebRequest
            public static Post ($uri: string, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>) : UnityEngine.Networking.UnityWebRequest
            public static Post ($uri: System.Uri, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>) : UnityEngine.Networking.UnityWebRequest
            public static Post ($uri: string, $formFields: System.Collections.Generic.Dictionary$2<string, string>) : UnityEngine.Networking.UnityWebRequest
            public static Post ($uri: System.Uri, $formFields: System.Collections.Generic.Dictionary$2<string, string>) : UnityEngine.Networking.UnityWebRequest
            /** Escapes characters in a string to ensure they are URL-friendly. * @param s A string with characters to be escaped.
            * @param e The text encoding to use.
            */
            public static EscapeURL ($s: string) : string
            /** Escapes characters in a string to ensure they are URL-friendly. * @param s A string with characters to be escaped.
            * @param e The text encoding to use.
            */
            public static EscapeURL ($s: string, $e: System.Text.Encoding) : string
            /** Converts URL-friendly escape sequences back to normal text. * @param s A string containing escaped characters.
            * @param e The text encoding to use.
            */
            public static UnEscapeURL ($s: string) : string
            /** Converts URL-friendly escape sequences back to normal text. * @param s A string containing escaped characters.
            * @param e The text encoding to use.
            */
            public static UnEscapeURL ($s: string, $e: System.Text.Encoding) : string
            public static SerializeFormSections ($multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>) : System.Array$1<number>
            public static GenerateBoundary () : System.Array$1<number>
            public static SerializeSimpleForm ($formFields: System.Collections.Generic.Dictionary$2<string, string>) : System.Array$1<number>
            public constructor ()
            public constructor ($url: string)
            public constructor ($uri: System.Uri)
            public constructor ($url: string, $method: string)
            public constructor ($uri: System.Uri, $method: string)
            public constructor ($url: string, $method: string, $downloadHandler: UnityEngine.Networking.DownloadHandler, $uploadHandler: UnityEngine.Networking.UploadHandler)
            public constructor ($uri: System.Uri, $method: string, $downloadHandler: UnityEngine.Networking.DownloadHandler, $uploadHandler: UnityEngine.Networking.UploadHandler)
        }
        /** Asynchronous operation object returned from UnityWebRequest.SendWebRequest().
        You can yield until it continues, register an event handler with AsyncOperation.completed, or manually check whether it's done (AsyncOperation.isDone) or progress (AsyncOperation.progress). */
        class UnityWebRequestAsyncOperation extends UnityEngine.AsyncOperation
        {
        }
        /** Helper object for UnityWebRequests. Manages the buffering and transmission of body data during HTTP requests. */
        class UploadHandler extends System.Object implements System.IDisposable
        {
        }
        /** Manage and process HTTP response body data received from a remote server. */
        class DownloadHandler extends System.Object implements System.IDisposable
        {
        }
        /** Responsible for rejecting or accepting certificates received on https requests. */
        class CertificateHandler extends System.Object implements System.IDisposable
        {
        }
        interface IMultipartFormSection
        {
        }
    }
    namespace UnityEngine.Networking.UnityWebRequest {
        enum Result
        { InProgress = 0, Success = 1, ConnectionError = 2, ProtocolError = 3, DataProcessingError = 4 }
    }
    namespace System.Text {
        class Encoding extends System.Object implements System.ICloneable
        {
        }
    }
        class GameStart extends UnityEngine.MonoBehaviour
        {
            public Register ($update: System.Action$1<number>, $lateUpdate: System.Action$1<number>, $quit: System.Action) : void
            public constructor ()
        }
}
}
